import request from "supertest";
import server from "../src/server";

describe("GET home", () => {
    it("should get a homepage", async () => {
        const res = await request(server).get("/");
        expect(res.status).toEqual(200);
        await server.close();
    });
});
