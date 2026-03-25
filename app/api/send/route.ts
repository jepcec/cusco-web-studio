import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, service } = await request.json();

    const data = await resend.emails.send({
      from: 'Cusco Digital Studio <onboarding@resend.dev>',
      to: ['jhonepc2003@gmail.com'], // Cambiar por tu correo real de recepción
      subject: `Nuevo mensaje de contacto: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="border-bottom: 2px solid #333; padding-bottom: 10px;">Nuevo Lead - Cusco Digital Studio</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Servicio interesado:</strong> ${service}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${message}
          </div>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
