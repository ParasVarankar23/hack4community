import { hashPassword, readUsers, verifyPassword, writeUsers } from "@/lib/auth-users";
import { NextResponse } from "next/server";

export async function POST(request) {
    let body;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const action = body.action;
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body.password === "string" ? body.password : "";

    try {
        const users = await readUsers();

        if (action === "register") {
            const name = typeof body.name === "string" ? body.name.trim() : "";

            const emailParts = email.split("@");
            const hasValidEmail =
                emailParts.length === 2 &&
                emailParts[0].length > 0 &&
                emailParts[1].includes(".") &&
                !emailParts[1].startsWith(".") &&
                !emailParts[1].endsWith(".");

            if (!name || !hasValidEmail || password.length < 8) {
                return NextResponse.json(
                    { error: "Enter a name, a valid email, and a password with at least 8 characters." },
                    { status: 400 },
                );
            }

            if (users.some((user) => user.email === email)) {
                return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
            }

            const { salt, hash } = await hashPassword(password);
            const user = {
                id: crypto.randomUUID(),
                name,
                email,
                passwordSalt: salt,
                passwordHash: hash,
                createdAt: new Date().toISOString(),
            };

            await writeUsers([...users, user]);
            return NextResponse.json({ user: { name: user.name, email: user.email } }, { status: 201 });
        }

        if (action === "login") {
            const user = users.find((candidate) => candidate.email === email);

            if (!user || !(await verifyPassword(password, user.passwordSalt, user.passwordHash))) {
                return NextResponse.json({ error: "Email or password is incorrect." }, { status: 401 });
            }

            return NextResponse.json({ user: { name: user.name, email: user.email } });
        }

        return NextResponse.json({ error: "Unsupported action." }, { status: 400 });
    } catch {
        return NextResponse.json({ error: "Unable to process the request right now." }, { status: 500 });
    }
}