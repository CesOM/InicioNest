# Auto Wash API

API REST hecha con NestJS para administrar un auto lavado.

## Funcionalidades

- Registrar vehiculos de clientes.
- Crear y administrar servicios de lavado.
- Agendar citas de lavado.
- Cambiar estado de una cita: `pending`, `in_progress`, `completed`, `cancelled`.
- Poblar datos de prueba con un seed.

## Rutas principales

```txt
GET    /vehicles
POST   /vehicles
GET    /vehicles/:id
PATCH  /vehicles/:id
DELETE /vehicles/:id

GET    /wash-services
POST   /wash-services
GET    /wash-services/:id
PATCH  /wash-services/:id
DELETE /wash-services/:id

GET    /appointments
POST   /appointments
GET    /appointments/:id
PATCH  /appointments/:id
DELETE /appointments/:id

GET    /seed
```

## Ejemplo de cita

```json
{
  "vehicleId": "uuid-del-vehiculo",
  "serviceId": "uuid-del-servicio",
  "scheduledAt": "2026-05-28T15:00:00.000Z",
  "notes": "Cliente solicita aroma interior"
}
```

## Ejecutar

```bash
npm install
npm run start:dev
```

## Verificar

```bash
npm run build
npm test
```
