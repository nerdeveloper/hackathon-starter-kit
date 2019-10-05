import request from "supertest";
import server from "../src/server";

describe("GET contact", () => {
    it("should get a contact page", async () => {
        const res = await request(server).get("/contact");
        expect(res.status).toEqual(200);

        await server.close();
    });
});
