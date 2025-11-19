import { pgTable, serial, text, timestamp, integer, pgEnum } from 'drizzle-orm/pg-core';


// export const usersTable = pgTable('users', {
//   id: serial('id').primaryKey(),
//   username: text('username').notNull(),
//   email: text('email').notNull(),
//   created_at: timestamp('created_at').defaultNow(),
// });

// export const posts = pgTable('posts', {
//   id: serial('id').primaryKey(),
//   user_id: integer('user_id').notNull(),
//   content: text('content').notNull(),
//   created_at: timestamp('created_at').defaultNow(),
//   title: text('title'),
// });

// export const comments = pgTable("comments", {
//   id: serial("id").primaryKey(),
//   post_id: integer("post_id")
//     .notNull()
//     .references(() => posts.id, { onDelete: "cascade" }),
//   content: text("content").notNull(),
// });

export const themesTable = pgTable("themes", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
});

export const skillStatus = pgEnum("skill_status",["undetermined", "not_aquired", "in_progress", "acquired"]);

export const skillsTable = pgTable("skills", {
    id: serial("id").primaryKey(),
    description: text("description").notNull(),
    level: integer("level").notNull(),
    themeid: integer("theme_id").references(() => themesTable.id, { onDelete: "set null" }),
    status : skillStatus("status").notNull().default("undetermined"),
});