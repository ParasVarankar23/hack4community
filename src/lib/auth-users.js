import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
const usersFile = join(process.cwd(), "src", "data", "users.json");

export async function readUsers() {
    try {
        const contents = await readFile(usersFile, "utf8");
        return contents.trim() ? JSON.parse(contents) : [];
    } catch (error) {
        if (error.code === "ENOENT") return [];
        throw error;
    }
}

export async function writeUsers(users) {
    await writeFile(usersFile, `${JSON.stringify(users, null, 2)}\n`, "utf8");
}

export async function hashPassword(password, salt = randomBytes(16).toString("hex")) {
    const hash = await scrypt(password, salt, 64);
    return { salt, hash: hash.toString("hex") };
}

export async function verifyPassword(password, salt, storedHash) {
    const derivedHash = await scrypt(password, salt, 64);
    const expectedHash = Buffer.from(storedHash, "hex");

    return (
        expectedHash.length === derivedHash.length &&
        timingSafeEqual(expectedHash, derivedHash)
    );
}