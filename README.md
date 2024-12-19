# CRUD App

Este proyecto es una aplicación móvil creada con React Native CLI que permite crear, leer, actualizar y eliminar usuarios.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Android Studio (para Android)
- Xcode (para iOS, solo en macOS)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-proyecto.git

   cd nombre-del-proyecto
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura el archivo `.env` con los valores adecuados, por ejemplo:

   ```bash
   API_URL=http://10.0.2.2:8080/api/v1 # URL del servidor de la API
   ```

## Ejecución

### En Android

1. En una terminal, ejecuta:
   ```bash
   npx react-native run-android
   ```

### En iOS (Solo en macOS)

1. Instala los pods necesarios:

   ```bash
   cd ios

   npx pod install

   cd ..
   ```

2. Ejecuta el proyecto:
   ```bash
   npx react-native run-ios
   ```

## Estructura del Proyecto

```
src/
├── assets/            # Imágenes, fuentes, etc.
├── config/            # Configuración global
├── components/        # Componentes reutilizables
├── constants/         # Constantes
├── containers/        # Contenedores
|-- interfaces/        # Interfaces
├── layouts/           # Layouts
├── services/          # Servicios
├── screens/           # Pantallas principales
├── styles/            # Estilos
├── index.js           # Archivo principal

```

## Notas

- Asegúrate de tener un dispositivo físico o un emulador configurado para Android/iOS.
- Para compilar el proyecto en modo de desarrollo, ejecuta `npm run android` o `npm run ios`.

---
