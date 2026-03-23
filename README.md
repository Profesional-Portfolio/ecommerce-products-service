# Product Service

Servicio responsable de la gestión del catálogo de productos e inventario.

## 📋 Características
-   📦 **Catálogo**: Listado, búsqueda y detalle de productos.
-   🏷️ **Categorías**: Gestión de taxonomías de productos.
-   💾 **Persistencia**: Uso de MongoDB para flexibilidad en el esquema.

## 🛠️ Tecnologías
-   NestJS
-   TypeScript
-   MongoDB / Mongoose
-   RabbitMQ

## 🚀 Configuración
1.  **Variables de Entorno**:
    ```bash
    cp .env.example .env
    ```
2.  **Ejecución**:
    ```bash
    pnpm run start:dev
    ```

## 📡 Patrones de Mensajería
-   `find_all_products`: Consulta masiva.
-   `find_one_product`: Consulta por ID único.