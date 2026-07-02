<script setup lang="ts">
import QRCode from "qrcode";
import { usePaymentStore } from "~/stores/usePaymentStore";

const { clear } = useUserSession();
const paymentStore = usePaymentStore();
const PaymentModal = usePaymentModal();
const qrCode = ref("");

onMounted(async () => {
  setInterval(async () => {
    checkStatus();
  }, 5000);
});

async function copyQRString() {
  await navigator.clipboard.writeText(paymentStore.data.QrString);
}

const transactionStatus = ref({
  Status: 0,
  StatusDesc: "Menunggu Pembayaran",
});

async function checkStatus() {
  if (!paymentStore.data.TransactionId) return;

  qrCode.value = await QRCode.toDataURL(paymentStore.data.QrString, {
    width: 300,
    margin: 1,
  });

  const res = (await $fetch("/api/payment/" + paymentStore.data.TransactionId)) as any;
  if (res.success && res.data.Success) {
    const d = res.data.Data as any;
    transactionStatus.value = d;

    if (transactionStatus.value.Status == 1) {
      alert("Transaksi berhasil, silahkan login kembali.");
      await clear();
      reloadNuxtApp({ force: true });
    }
  }
}
</script>

<template>
  <dialog class="modal modal-bottom sm:modal-middle" :class="{ 'modal-open': PaymentModal.opened.value }">
    <div class="modal-box max-w-md border border-base-300 bg-base-200 p-0 overflow-hidden">
      <!-- Header -->
      <div class="bg-gradient-to-r from-primary to-secondary p-6 text-center text-primary-content">
        <Icon name="material-symbols:qr-code-2-rounded" size="46" />

        <h2 class="mt-3 text-2xl font-bold">Scan QRIS</h2>

        <p class="mt-1 text-sm opacity-80">Scan menggunakan aplikasi e-wallet atau mobile banking.</p>
      </div>

      <div class="flex flex-col space-y-5 p-6 max-h-142 overflow-scroll">
        <!-- QR -->
        <div class="flex w-full h-full justify-center items-center rounded-2xl bg-white p-5">
          <img v-if="qrCode" :src="qrCode" class="mx-auto w-full max-w-xs" />
          <div v-else class="loading loading-xl"></div>
        </div>

        <!-- Total dan Status -->
        <div class="text-center">
          <div class="badge badge-soft my-1" :class="transactionStatus.Status == 1 ? 'badge-success' : 'badge-error'">
            {{ transactionStatus.StatusDesc }}
          </div>

          <p class="text-sm opacity-70">Total Pembayaran</p>

          <h1 class="text-4xl font-bold text-primary">Rp {{ paymentStore.data.Total?.toLocaleString("id-ID") }}</h1>

          <p class="mt-2 text-xs opacity-60">
            Subtotal Rp {{ paymentStore.data.SubTotal?.toLocaleString("id-ID") }} • Biaya Rp
            {{ paymentStore.data.Fee?.toLocaleString("id-ID") }}
          </p>
        </div>

        <div class="divider my-2" />

        <div class="space-y-3 text-sm">
          <div class="flex justify-between">
            <span class="opacity-70">ID</span>
            <span class="font-mono text-xs">
              {{ paymentStore.data.TransactionId }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="opacity-70">Metode</span>
            <span class="font-semibold"> {{ paymentStore.data.Via }} </span>
          </div>

          <div class="flex justify-between">
            <span class="opacity-70">Merchant</span>
            <span class="font-semibold">
              {{ paymentStore.data.PaymentName }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="opacity-70"> Berlaku sampai </span>

            <span class="font-semibold text-warning">
              {{ paymentStore.data.Expired }}
            </span>
          </div>
        </div>

        <div class="alert alert-info">
          <Icon name="material-symbols:info-rounded" size="22" />

          <span>
            Setelah pembayaran berhasil, status akan diperbarui secara otomatis. Jangan tutup halaman ini sebelum
            pembayaran selesai.
          </span>
        </div>

        <button class="btn btn-outline w-full" @click="copyQRString">
          <Icon name="material-symbols:content-copy-rounded" size="20" />
          Salin QR String
        </button>

        <button class="btn btn-primary w-full">Saya Sudah Membayar</button>
      </div>

      <button class="btn btn-circle btn-sm btn-ghost absolute right-3 top-3" @click="PaymentModal.close()">
        <Icon name="material-symbols:close-rounded" size="22" />
      </button>
    </div>

    <form method="dialog" class="modal-backdrop" @click="PaymentModal.close()">
      <button>Tutup</button>
    </form>
  </dialog>
</template>
