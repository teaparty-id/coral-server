<script setup lang="ts">
import { push } from "notivue";

const paymentStore = usePaymentStore();
const paymentModal = usePaymentModal();
const authModal = useAuthModal();
const { loggedIn, user } = useUserSession();

const purchaseLoading = ref(false);
const plans = ref<any>([]);
const expanded = ref(true);

function toggleExpanded() {
  expanded.value = !expanded.value;
}

async function purchase(productId: string, productCode: string) {
  if (!user.value) {
    return authModal.open("login");
  }

  switch (productCode) {
    case "free":
      break;
    case "enterprise":
      await navigateTo("https://wa.me/6285159946600", {
        external: true,
        open: {
          target: "_blank",
        },
      });
      break;
    default:
      purchaseLoading.value = true;
      $fetch("/api/payment", {
        method: "POST",
        body: JSON.stringify({
          productId: productId,
        }),
      })
        .then(async ({ success, data }) => {
          const d = data as any;
          if (success && d.Success) {
            paymentStore.data = d.Data;
            paymentModal.open();
          }
        })
        .catch((e: any) => {
          push.error({ title: "Failed to purchase", message: e.data?.message || e.message });
        })
        .finally(() => {
          purchaseLoading.value = false;
        });
  }
}

async function fetchPlans() {
  const res = await $fetch("/api/plan/list");
  if (res.success) {
    for (let plan of res.data as any) {
      plan.button = "Pilih Paket";
      plan.buttonClass = "btn-outline";

      if (plan.code == "free") {
      }
      if (plan.code == "pro") {
        plan.featured = true;
        plan.buttonClass = "btn-primary";
      }
      if (plan.code == "enterprise") {
        plan.button = "Hubungi Kami";
        plan.price = {
          currency: "",
          price: "Custom",
          interval: "monthly",
        };
      }
    }
    plans.value = res.data;
  } else {
    // Error alert
  }
}

onMounted(async () => {
  await fetchPlans();
});
</script>

<template>
  <section class="py-24 bg-base-200">
    <div class="container mx-auto px-6 max-w-7xl">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black">Harga yang Sesuai untuk Semua Rental</h2>

        <p class="opacity-70 mt-4">Mulai gratis dan tingkatkan paket kapan saja sesuai kebutuhan.</p>
      </div>

      <div v-if="plans.length > 0" class="grid md:grid-cols-2 xl:grid-cols-4 gap-6 transition-all">
        <div v-for="plan in plans" :class="plan.featured && 'aura aura-rainbow'" class="hover:scale-105 transition-all">
          <div
            :key="plan.name"
            class="card bg-base-200 shadow-xl h-full"
            :class="!plan.featured && 'border border-current/10'"
          >
            <div class="card-body">
              <div>
                <h3 class="card-title">
                  {{ plan.name }}
                </h3>

                <p class="opacity-70 min-h-12">
                  {{ plan.description }}
                </p>

                <div class="my-6 flex flex-col">
                  <span class="text-4xl font-black">
                    {{ plan.price.currency + " " + plan.price.price }}
                  </span>

                  <span class="opacity-60">
                    /
                    {{ plan.price.interval }}
                  </span>
                </div>
              </div>

              <ul
                class="space-y-3 flex-1 overflow-hidden transition-all duration-200"
                :class="expanded ? 'max-h-250' : 'max-h-46'"
              >
                <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-3">
                  <div class="badge badge-success badge-sm"></div>
                  <span>{{
                    (feature.value != "true" ? (feature.value as string).toUpperCase() + " " : "") + feature.name
                  }}</span>
                </li>
              </ul>

              <!-- <button class="btn btn-ghost btn-sm w-full mb-2" @click.stop="toggleExpanded()">
                {{ expanded ? "Sembunyikan Fitur" : "Lihat Semua Fitur" }}

                <Icon
                  name="heroicons:chevron-down"
                  class="transition-transform duration-300"
                  :class="{ 'rotate-180': expanded }"
                />
              </button> -->

              <button
                class="btn w-full mt-8"
                :class="plan.buttonClass"
                :disabled="(loggedIn && user?.plan == plan.code) || purchaseLoading"
                @click="purchase(plan.id, plan.code)"
              >
                <div :class="purchaseLoading && 'loading'">
                  {{ plan.button }}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="skeleton w-full min-h-146"></div>
    </div>
  </section>
</template>
