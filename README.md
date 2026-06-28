# Sitio web de Papelería N-Impress

Una aplicación web React moderna y responsiva para N-Impress Stationery, que muestra productos y servicios de papelería de primera calidad con un enfoque en la creatividad y la productividad.


## 🚀 Características

### Funcionalidad básica
- **Diseño responsivo**: Diseño totalmente responsivo que funciona sin problemas en computadoras de escritorio, tabletas y dispositivos móviles
- **Cambio de tema**: Alternar modo claro y oscuro con preferencias persistentes del usuario
- **Navegación**: Barra de navegación fija con menú móvil de hamburguesas
- **Enrutamiento**: Enrutamiento del lado del cliente con React Router para transiciones de página fluidas

### Páginas y secciones
- **Inicio/Aterrizaje**: Sección de héroes, exhibición de productos destacados y áreas de llamada a la acción
- **Productos**: Catálogo completo de productos con precios y descripciones
- **Servicios**: Ofertas de servicios que incluyen impresión, pedidos al por mayor y consultas
- **Acerca de nosotros**: Historia de la empresa, misión, valores fundamentales y perfiles de los miembros del equipo
- **Contacto**: Formulario de contacto con validación y datos comerciales

### Características técnicas
- **Rendimiento optimizado**: Carga diferida para componentes de página y React.memo para optimización de componentes
- **Validación de formularios**: Validación del lado del cliente con retroalimentación de errores en tiempo real
- **Accesibilidad**: HTML semántico y soporte de navegación con teclado
- **Interfaz de usuario moderna**: Diseñado con componentes estilizados y animaciones fluidas
## 🛠️ Pila de tecnología

- **Frontend**: React 18 con Hooks
- **Routing**: React Router DOM
- **Estilos**: styled-components con soporte para temas
- **Herramienta de compilación**: Create React App
- **State Management**: React Context API
- **Iconos**: Iconos basados en emojis para un diseño liviano

## 📋  Requisitos previos (para instalar el proyecto)

- Node.js (v14 o superior)
- Administrador de paquetes npm o yarn

## 🚀 Instalación y configuración

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/AnzzzGM/papeleria_N_impress_web.git
   cd papeleria-n-impress-web
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm start
   ```
   La solicitud se abrirá en `http://localhost:3000`

4. **Construir para producción**
   ```bash
   npm run build
   ```
   Esto crea una construcción de producción optimizada en la carpeta `build` .

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes UI reutilizables
│   └── NavBar.js       # Componente de navegación
├── contexts/           # Proveedores de contexto React
│   └── ThemeContext.js # Gestión de temas
├── hooks/             # Hooks React personalizados
│   └── useTheme.js    # Hook-Tema
├── pages/             # Componentes de página
│   ├── Landing.js     # Página de inicio
│   ├── Products.js    # Catálogo de productos
│   ├── Services.js    # Página de servicios
│   ├── AboutUs.js     # Página «Acerca de nosotros»
│   └── Contact.js     # Página de contacto
├── styles/            # Estilo y temas
│   └── themes.js      # Definiciones de temas
├── App.js             # Componente principal de la aplicación
├── App.css            # Estilos específicos de la aplicación
├── index.js           # Punto de entrada de la aplicación
└── index.css          # Estilos globales
```

## 🎨 Sistema de temas

La aplicación admite dos temas:
- **Light Theme**: Colores brillantes y vibrantes para uso diurno
- **Dark Theme**: Colores apagados para entornos con poca luz

Las preferencias del tema se guardan automáticamente en localStorage y persisten en todas las sesiones del navegador.

## 📱 Diseño responsivo

- **Desktop**: Diseño completo con secciones una al lado de la otra
- **Tablet**: Diseños de cuadrícula y tamaños de fuente ajustados
- **Mobile**: Diseños apilados, menú de hamburguesas e interacciones táctiles

## 🔧 Scripts disponibles

- `npm start` - Iniciar servidor de desarrollo
- `npm run build` - Crear compilación de producción
- `npm test` - Ejecutar pruebas (si están implementadas)
- `npm run eject` - Expulsar de la aplicación Create React (no recomendado)

## 🌐 Deployment

La aplicación creada se puede implementar en cualquier servicio de alojamiento estático:

1. Construye el proyecto: `npm run build`
2. Implementar el contenido de la carpeta `build` para su proveedor de alojamiento
3. Configurar el hosting para servir `index.html` para todas las rutas (ruta SPA)

## 🤝 Contribuir

1. Bifurcar el repositorio
2. Crear una rama de funciones
3. Haz tus cambios
4. Pruebe minuciosamente
5. Enviar una pull request

## 📄 License

Este proyecto fue diseñado por `Anz GM` especificamente para la papeleria N-Impress (puede ser usado o modificado libremente). Este proyecto es open source, bajo la licencia `Licencia Apache-2.0` 

![alt open source](https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2014/11/opensource.jpg?width=1200&enable=upscale).

## 📞 Contacto

Si tiene preguntas o ayuda, comuníquese con:
- Email: infon-impress@gmail.com
