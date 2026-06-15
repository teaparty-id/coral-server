import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { devices } from "./devices";

export const sessions = sqliteTable(
  "sessions",
  {
    id: text("id").primaryKey(),

    deviceId: text("device_id")
      .notNull()
      .references(() => devices.id, {
        onDelete: "cascade",
      }),

    startedAt: integer("started_at", {
      mode: "timestamp_ms",
    }).notNull(),

    expiresAt: integer("expires_at", {
      mode: "timestamp_ms",
    }).notNull(),

    status: text("status").notNull(),

    createdAt: integer("created_at", {
      mode: "timestamp_ms",
    }).notNull(),
  },
  (table) => [index("sessions_device_idx").on(table.deviceId)],
);
