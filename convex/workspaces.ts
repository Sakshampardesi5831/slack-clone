import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("UnAuthorized");
    }
    // Todo : create a proper function
    const joinCode = 123456;
    const workSpaceId = await ctx.db.insert("workspaces", {
      name: args.name,
      userId: userId,
      joinCode: joinCode.toString(),
    });

    return workSpaceId;
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("workspaces").collect();
  },
});


export const getById = query({
  args: {
    id: v.id("workspaces"),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("UnAuthorized");
    }
    const workspace = await ctx.db.get(args.id);
    if (!workspace) {
      throw new Error("Workspace not found");
    }
    return workspace;
  },
});