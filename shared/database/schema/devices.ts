import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { users } from "./users";

export const devices = sqliteTable(
  "devices",
  {
    id: text("id").primaryKey(),

    userId: text("user_id")
      .notNull()
      .references(() => users.id, {
        onDelete: "cascade",
      }),

    name: text("name").notNull(),

    lastSeen: integer("last_seen", {
      mode: "timestamp_ms",
    }),

    createdAt: integer("created_at", {
      mode: "timestamp_ms",
    }).notNull(),
  },
  (table) => [index("devices_user_idx").on(table.userId)],
);

export const deviceState = sqliteTable("device_state", {
  deviceId: text("device_id")
    .primaryKey()
    .references(() => devices.id, {
      onDelete: "cascade",
    }),

  action: text("action"),

  message: text("message"),

  sessionEnd: integer("session_end", {
    mode: "timestamp_ms",
  }),

  updatedAt: integer("updated_at", {
    mode: "timestamp_ms",
  }).notNull(),
});
