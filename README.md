# Real-Time Chat App con Node.js

Este proyecto es una aplicación de chat interactivo que funciona en tiempo real, desarrollada para demostrar el uso de **JavaScript en el servidor**.

## Tecnologías y Conceptos
* **Node.js**: Motor principal del servidor.
* **Socket.io**: Para que los mensajes lleguen al instante (WebSockets).
* **Express**: Para servir nuestra interfaz web.
* **CSS Dinámico**: Burbujas que se alinean según el emisor del mensaje.

---

## Evidencias del funcionamiento

A continuación, se presentan las capturas de pantalla que demuestran que el chat funciona correctamente entre diferentes clientes:

### 1. Conexión de múltiples usuarios
> Aquí puedes ver cómo se ve el chat al abrir dos pestañas diferentes.
<img width="1600" height="105" alt="image" src="https://github.com/user-attachments/assets/561e01a6-05b2-4306-9bca-f3b5c11499d1" />


### 2. Envío y recepción en tiempo real
> Prueba de envío de mensajes donde se aprecia la diferencia entre mensajes propios (derecha) y recibidos (izquierda).
<img width="1600" height="370" alt="image" src="https://github.com/user-attachments/assets/4c629596-0042-4add-baf1-30c373518869" />


### 3. Log del Servidor (Terminal)
> Captura de la terminal de VS Code donde el servidor confirma las conexiones.
<img width="1305" height="383" alt="image" src="https://github.com/user-attachments/assets/bfd15906-4252-4b2c-9480-1af28c3cfb0e" />


---

## Instrucciones de Instalación
Si quieres probarlo tú mismo:
1. Instala dependencias: `npm install`
2. Corre el servidor: `node server.js`
3. Abre en el navegador: `localhost:3000`
