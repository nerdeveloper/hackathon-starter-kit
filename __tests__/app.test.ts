import request from "supertest";
import server from "../src/server";

describe("GET Login", () => {
    it("should get a Login page", async () => {
        const res = await request(server).get("/login");
        expect(res.status).toEqual(200);
        await server.close();
    });
});

describe("GET Logout", () => {
    it("should get a Logout", async () => {
        const res = await request(server).get("/logout");
        expect(res.status).toEqual(302);
        console.log(res.status);
        await server.close();
    });
});

describe("GET Register", () => {
    it("should get a Register page", async () => {
        const res = await request(server).get("/register");
        expect(res.status).toEqual(200);
        await server.close();
    });
});

describe("GET 404", () => {
    it("should get a 404 page", async () => {
        const res = await request(server).get("/hello"); //Random URL
        expect(res.status).toEqual(302);
        await server.close();
    });
});
