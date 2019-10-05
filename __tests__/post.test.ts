import request from "supertest";
import server from "../src/server";

describe("GET Post", () => {
    it("should get a Post page", async () => {
        const res = await request(server).get("/post");
        expect(res.status).toEqual(302);
        await server.close();
    });
});

describe("GET Create Page", () => {
    it("should get a Create page", async () => {
        const res = await request(server).get("/create");
        expect(res.status).toEqual(302);
        await server.close();
    });
});

describe("POST route", () => {
    it("should create a new post", async () => {
        const res = await request(server)
            .post("/create")
            .field("title", "Cooking soup")
            .field("description", "How to prepare a stew!");
        expect(res.status).toEqual(200);
        await server.close();
    });
});
