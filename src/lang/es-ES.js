export default {
  languages: {
    zhCN: 'Chino',
    enUS: 'Inglés',
    koKR: 'Coreano',
    esES: 'Español'
  },
  common: {
    back: 'Volver',
    nextStep: 'Siguiente paso',
    submit: 'Enviar',
    submitting: 'Enviando...',
    agree: 'Aceptar',
    disagree: 'No aceptar'
  },
  home: {
    title: 'Sube fotos a color para conservar recuerdos',
    title_2: 'Personalización de tarjetas DIY',
    startCreating: 'Empezar',
    language: 'Idioma'
  },
  cardSelection: {
    diyBannerTitle: 'Personalización DIY',
    diyBannerDesc: 'Sube tus fotos para crear una tarjeta de crédito única',
    presetCardsTitle: 'Tarjetas de crédito destacadas',
    apply: 'Solicitar'
  },
  presetCard: {
    title: 'Detalles de la tarjeta',
    benefits: 'Beneficios de la tarjeta',
    applicationForm: 'Formulario de solicitud',
    fullName: 'Nombre completo',
    fullNamePlaceholder: 'Introduce tu nombre completo',
    email: 'Correo electrónico',
    emailPlaceholder: 'Introduce tu correo electrónico',
    phone: 'Teléfono',
    phonePlaceholder: 'Introduce tu número de teléfono',
    idNumber: 'Número de identificación',
    idNumberPlaceholder: 'Introduce tu número de identificación',
    address: 'Dirección',
    addressPlaceholder: 'Introduce tu dirección',
    submit: 'Enviar solicitud',
    submitting: 'Enviando...',
    submitError: 'El envío falló, inténtalo más tarde',
    agreementText: 'He leído y acepto',
    termsLink: 'Términos del servicio',
    and: 'y',
    privacyLink: 'Política de privacidad',
    agreementError: 'Por favor, acepta los Términos del servicio y la Política de privacidad',
    errors: {
      fullNameRequired: 'Introduce tu nombre completo',
      emailRequired: 'Introduce tu correo electrónico',
      emailInvalid: 'Introduce un correo válido',
      phoneRequired: 'Introduce tu número de teléfono',
      phoneInvalid: 'Introduce un número de teléfono válido',
      idNumberRequired: 'Introduce tu número de identificación',
      addressRequired: 'Introduce tu dirección'
    }
  },
  userApply: {
    idPhoto: 'Foto del documento',
    idPhotoTip: 'Sube fotos claras del documento (máx. 9)',
    clickToUpload: 'Haz clic para subir fotos del documento',
    uploadFormat: 'Se admiten JPG y PNG, máx. 5MB por foto',
    job: 'Ocupación',
    jobPlaceholder: 'Introduce tu ocupación',
    company: 'Empresa',
    companyPlaceholder: 'Introduce tu empresa',
    mailingAddress: 'Dirección postal',
    errors: {
      idPhotoRequired: 'Sube al menos una foto del documento',
      invalidFormat: 'Formato no compatible, sube JPG o PNG',
      fileTooLarge: 'El tamaño supera 5MB, elige otro archivo',
      tooManyPhotos: 'Máximo {max} fotos. Tienes {current}, puedes subir {remaining} más',
      jobRequired: 'Introduce tu ocupación',
      companyRequired: 'Introduce tu empresa'
    }
  },
  applicationComplete: {
    title: 'Solicitud de tarjeta de crédito',
    success: 'Éxito',
    successMessage: 'Estimado cliente, su solicitud se ha enviado correctamente. Espere la notificación de revisión. Puede consultar el progreso en "Tarjeta de crédito - Progreso de solicitud" en la banca móvil.',
    applicationNumber: 'Número de solicitud',
    cardProduct: 'Producto de tarjeta',
    mailingAddress: 'Dirección postal',
    defaultAddress: 'Beijing City, Beijing City, Chaoyang District, Beijing Sunshine Upper East Gemini Tower * Floor, Beijing Dangdang Culture and Education E-commerce Co., Ltd.',
    qrcodeTitle: 'Código QR de la información de la tarjeta',
    qrcodeTip: 'Escanea el código QR para ver la información de la tarjeta',
    qrcodeFailed: 'No se pudo generar el código QR',
    returnHome: 'Volver al inicio',
    checkProgress: 'Consultar progreso',
    progressTip: 'Puede consultar el progreso en "Tarjeta de crédito - Progreso de solicitud" en la banca móvil',
    customerServiceTip: 'Función de atención al cliente en desarrollo',
    diyCardProduct: 'Tarjeta de crédito personalizada DIY',
    presetCardProduct: 'Tarjeta de crédito de viaje a Europa'
  },
  applicationProgress: {
    title: 'Progreso de solicitud',
    applicationNumber: 'Número de solicitud',
    applicationSheet: 'Número de solicitud',
    productName: 'Nombre del producto',
    applyDate: 'Fecha de solicitud',
    applyType: 'Tipo de solicitud',
    applicationNumberPlaceholder: 'Introduce el número de solicitud',
    query: 'Consultar',
    loading: 'Consultando...',
    currentStatus: 'Estado actual',
    statusReceived: 'Solicitud recibida',
    statusSubmitted: 'En revisión',
    defaultCardProduct: 'Serie silueta de tarjeta de viaje a Europa',
    defaultApplyType: 'Tarjeta principal',
    mailingAddress: 'Dirección postal',
    stepSubmitted: 'Enviado',
    stepSubmittedDesc: 'Solicitud enviada correctamente. Espere la revisión.',
    stepReviewing: 'En revisión',
    stepReviewingDesc: 'Estamos revisando su información.',
    stepResult: 'Resultado',
    stepResultDesc: 'Le notificaremos cuando finalice la revisión.',
    tip: 'Aviso: esta página muestra un progreso de demostración. Para el progreso real, consulte la banca móvil "Tarjeta de crédito - Progreso de solicitud".',
    queryFailed: 'La consulta falló, inténtalo más tarde'
  },
  cardProducts: {
    travelEurope: {
      category: 'Viaje por Europa',
      title: 'Tarjeta de crédito de viaje a Europa',
      description: '1,5% de reembolso en gastos en Europa, sin límite',
      benefits: [
        '1,5% de reembolso en gastos en Europa, sin límite',
        'Acceso gratuito a salas VIP en aeropuertos',
        'Cobertura de seguro de viaje'
      ]
    },
    zodiac: {
      category: 'Zodiaco chino',
      title: 'Tarjeta del zodiaco',
      description: 'Graba la cultura, muestra confianza',
      benefits: [
        'Diseño único del zodiaco',
        'Valor conmemorativo cultural',
        'Beneficios exclusivos'
      ]
    },
    peonyDragon: {
      category: 'Beneficios inclusivos',
      title: 'Tarjeta Peonía Súper Beneficio Dragón',
      description: 'Beneficios potentes, recompensas sinceras',
      benefits: [
        'Reembolso atractivo',
        'Puntos dobles en compras',
        'Descuentos exclusivos en comercios'
      ]
    }
  },
  idUpload: {
    title: 'Solicitud de tarjeta de crédito',
    uploadLabel: 'Tome fotos del documento del solicitante (anverso y reverso, 2 en total)',
    clickToUpload: 'Haz clic para subir',
    uploadHint: 'Se admiten JPG y PNG, máx. 5MB',
    idPhotoAlt: 'Foto del documento {index}',
    infoTitle: 'Verifique la información de identidad; si hay errores, modifíquela',
    fullName: 'Nombre',
    fullNamePlaceholder: 'Introduce tu nombre',
    idNumber: 'Número de identificación',
    idNumberPlaceholder: 'Introduce tu número de identificación',
    isLongTerm: '¿Vigencia indefinida?',
    yes: 'Sí',
    no: 'No',
    idStartDate: 'Fecha de inicio del documento',
    idEndDate: 'Fecha de vencimiento del documento',
    phone: 'Teléfono móvil',
    phonePlaceholder: 'Introduce tu número de teléfono',
    faceModalTitle: 'Autorización de verificación facial',
    faceInstructions: {
      light: 'Mantén buena iluminación',
      center: 'Mira directamente a la pantalla',
      frame: 'Mantén el rostro dentro del marco'
    },
    faceDisclaimer: 'Esta solicitud requiere reconocimiento facial. La imagen facial recopilada se usa solo para verificar que la solicitud sea suya. Si no acepta, verificaremos su identidad por teléfono o en una sucursal. ¡Gracias!',
    faceFailTip: 'Si la verificación facial falla, acuda a una sucursal para solicitar.',
    errors: {
      fullNameRequired: 'Introduce tu nombre',
      phoneRequired: 'Introduce tu número de teléfono',
      phoneInvalid: 'Introduce un número de teléfono válido',
      idNumberRequired: 'Introduce tu número de identificación',
      idNumberInvalid: 'Formato de número de identificación no válido',
      idStartDateRequired: 'Selecciona la fecha de inicio del documento',
      idEndDateRequired: 'Selecciona la fecha de vencimiento del documento',
      idEndDateInvalid: 'La fecha de vencimiento debe ser posterior a la fecha de inicio',
      verifyCodeRequired: 'Introduce el código de verificación',
      verifyCodeInvalid: 'Introduce un código de verificación de 6 dígitos',
      idPhotoRequired: 'Sube fotos del documento',
      sendCodeFailed: 'No se pudo enviar el código, inténtalo más tarde'
    }
  },
  faceRecognition: {
    permissionTitle: '¿Permitir acceso a la cámara?',
    permissionDesc: 'Se usa para tomar fotos, videos, escanear códigos QR, etc.',
    allowCamera: 'Permitir mientras se usa',
    allowCameraOnce: 'Permitir solo esta vez',
    denyCamera: 'No permitir',
    preparing: 'Preparando...',
    countdown: '{count}s',
    verifying: 'Verificando, mantén la postura',
    success: 'Reconocimiento facial exitoso',
    failed: 'Reconocimiento facial fallido',
    similarity: 'Similitud: {value}',
    retry: 'Reintentar',
    confirmExit: '¿Seguro que deseas salir del reconocimiento facial?',
    messages: {
      permissionRequired: 'Por favor, permite el acceso a la cámara',
      noCameraSimulated: 'No se detectó cámara, se cambió al flujo simulado',
      simulationStarted: 'Se inició el flujo simulado',
      simulatedRecognizing: 'Reconocimiento simulado...',
      moveToCenter: 'Mueve tu rostro al centro',
      recognitionNetworkError: 'El reconocimiento facial falló, revisa la red o inténtalo más tarde',
      noFaceDetected: 'No se detectó ningún rostro',
      faceDetectedKeepStill: 'Rostro detectado, mantente quieto',
      faceDetectedRegister: 'Rostro detectado, puedes registrar',
      detectionFailedBrowser: 'Fallo al detectar rostro, prueba con Chrome/Edge',
      openingCamera: 'Abriendo cámara...',
      loadingModel: 'Cargando modelo de reconocimiento facial...',
      modelUnavailableSimulated: 'No se pudo cargar el modelo o la capacidad es insuficiente; se cambió al flujo simulado',
      placeFaceInFrame: 'Coloca tu rostro dentro del marco circular',
      placeFaceInFrameRegister: 'Coloca tu rostro dentro del marco circular, puedes registrar',
      noClearFaceRetry: 'No se detectó un rostro claro, vuelve a alinear',
      registerSuccess: 'Rostro registrado correctamente. Puedes verificar ahora o esperar la verificación automática',
      verifyNoFace: 'No se detectó rostro, verificación fallida',
      verifyFailedFacing: 'Verificación fallida, mira a la cámara y vuelve a intentarlo',
      verifyPassed: 'Verificación aprobada',
      verifyFailedNetwork: 'Verificación fallida, revisa la red o inténtalo más tarde',
      moveCloser: 'Acércate un poco',
      moveFarther: 'Aléjate un poco',
      imageUploadFailed: 'Falló la subida de la imagen, inténtalo de nuevo',
      verifyFailed: 'Reconocimiento facial fallido',
      apiFailed: 'Fallo en la llamada a la API, inténtalo de nuevo'
    },
    errors: {
      permissionRequired: 'Se requiere permiso de cámara para el reconocimiento facial',
      cameraNotSupported: 'El navegador actual no admite el acceso a la cámara',
      cameraInitFailed: 'La inicialización de la vista previa de la cámara falló',
      cameraPreviewTimeout: 'Tiempo de espera de la vista previa de la cámara',
      faceApiBrowserOnly: 'Face API solo es compatible con entornos de navegador',
      faceApiScriptLoadFailed: 'No se pudo cargar el script de face-api',
      faceApiNotInitialized: 'face-api no está inicializado',
      faceApiInitFailed: 'Error al inicializar face-api',
      modelNotReady: 'El modelo de reconocimiento facial no está listo',
      registerNoFace: 'No se detectó rostro, registro fallido',
      registerFailed: 'Registro fallido, inténtalo de nuevo',
      faceApiNotLoaded: 'face-api no está cargado'
    }
  },
  aiDraw: {
    descriptionTitle: 'Descripción detallada',
    startGenerate: 'Comenzar a generar',
    loading: 'Cargando...',
    defaultDesc: 'Obra maestra, mejor calidad, alta calidad, alta resolución, ultra detallado, realista, una chica dulce, cabello largo, accesorio de hoja, orejas puntiagudas, elfa, ojos verdes, piel pálida, hombros descubiertos, vestido largo blanco',
    generateFail: 'Error al generar la imagen, vuelve a introducir la descripción',
    sizeLandscape: 'Horizontal',
    sizePortrait: 'Vertical',
    styles: {
      picas: 'Picasso',
      animeEra: 'Era del anime',
      colorfulIllustration: 'Ilustración colorida',
      colorfulAnime: 'Anime colorido',
      monetGarden: 'Jardín de Monet',
      delicateMarvel: 'Cómic americano refinado',
      romanticLight: 'Luz romántica',
      cyberpunk: 'Ciberpunk',
      japanAnime: 'Estilo anime japonés',
      animeStyle: 'Estilo anime',
      game3dEra: 'Era Z de juegos 3D'
    }
  },
  diy: {
    clickUpload: 'Haz clic para subir',
    imageSize: 'Tamaño de carga de imagen: no mayor de 20MB',
    imageDimensions: 'Dimensiones de imagen: mayores que 1051*673',
    contentGuidelines: 'Asegúrate de que el contenido subido no infrinja derechos de imagen ni de autor y cumpla con la normativa',
    emojiSticker: 'Emoji',
    textSticker: 'Texto',
    moodSticker: 'Animo',
    reUpload: 'Volver a subir',
    nextStep: 'Siguiente paso',
    imageNotFull: '¡La imagen no está completa!',
    pleaseAddCardImage: 'Primero añade una imagen de tarjeta',
    elementLimit: 'El número máximo de elementos no puede exceder 4',
    zombieTip: 'Aviso: un escalado alto puede afectar la nitidez',
    cropperTip: 'El área de recorte no puede tener espacios en blanco. Ajusta la imagen de nuevo',
    loading: 'Subiendo',
    uploadWithTip: 'El ancho de la imagen es menor que 1051 píxeles. Vuelve a subirla',
    uploadHeightTip: 'La altura de la imagen es menor que 673 píxeles. Vuelve a subirla',
    uploadSizeTip: 'El tamaño de la imagen supera 20MB. Vuelve a subirla',
    uploadSuccess: '¡Subida exitosa!',
    uploadFail: '¡Subida fallida!',
    pleaseContactStaff: 'Contacta al personal en sitio para recoger la tarjeta',
    backToHome: 'Volver al inicio',
    work: 'Obra',
    enterWork: 'Introduce el nombre de la obra',
    author: 'Autor',
    enterAuthor: 'Introduce el nombre del autor',
    copyright: 'Aviso de derechos de autor',
    copyrightTips: 'Asegúrate de tener los derechos de propiedad intelectual y la autorización legal válida para usar el contenido de las imágenes subidas en este producto.',
    uploadSubmit: 'Confirmar subida',
    clickReUpload: 'Haz clic para volver a subir',
    imageFormatNotSupport: 'Formato de imagen no compatible'
  },
  terms: {
    title: 'Términos del servicio',
    content: `
      <h2>1. Resumen del servicio</h2>
      <p>Este servicio es proporcionado por instituciones relevantes. Incluye, entre otros, solicitudes de tarjetas de crédito, personalización de tarjetas y otras funciones.</p>

      <h2>2. Elegibilidad del usuario</h2>
      <p>Usted confirma que, antes de usar este servicio, debe tener la capacidad civil correspondiente a sus actos conforme a las leyes de la República Popular China. Si no la tiene, usted y su tutor asumirán todas las consecuencias según la ley.</p>

      <h2>3. Confirmación y aceptación de los términos</h2>
      <p>Estos términos constituyen el acuerdo legal entre usted y este servicio. Debe leerlos cuidadosamente antes de usar el servicio.</p>
      <p>Al hacer clic en "Aceptar" en la página de solicitud, se considera que ha leído, entendido y aceptado todos los términos y se compromete a cumplirlos.</p>

      <h2>4. Contenido del servicio</h2>
      <p>Este servicio ofrece principalmente:</p>
      <ul>
        <li>Información de productos de tarjetas de crédito</li>
        <li>Servicio de solicitud de tarjetas de crédito</li>
        <li>Servicio de personalización de tarjetas</li>
        <li>Información y noticias relacionadas</li>
      </ul>

      <h2>5. Obligaciones del usuario</h2>
      <p>Al usar este servicio, usted se compromete a:</p>
      <ol>
        <li>Cumplir las leyes y regulaciones pertinentes de la República Popular China</li>
        <li>Proporcionar información personal verdadera, precisa y completa</li>
        <li>No utilizar este servicio para actividades ilegales o inapropiadas</li>
        <li>Proteger la seguridad de su cuenta y contraseña</li>
      </ol>

      <h2>6. Recopilación y uso de información</h2>
      <p>Podemos recopilar información personal, incluidos nombre, contacto e identificación, entre otros. Prometemos usarla solo para prestar servicios, mejorar la calidad y brindar soporte.</p>

      <h2>7. Cambios, interrupciones o terminación del servicio</h2>
      <p>Tenemos derecho a ajustar, modificar o terminar el servicio en cualquier momento según las necesidades del negocio. Publicaremos los cambios en el sitio web.</p>

      <h2>8. Descargo de responsabilidad</h2>
      <p>No nos hacemos responsables por interrupciones del servicio o pérdida de datos causada por fuerza mayor u otras razones no atribuibles a este servicio. Este servicio no ofrece garantías expresas ni implícitas.</p>

      <h2>9. Modificación de términos</h2>
      <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los términos modificados se publicarán en el sitio y se considerará que los usuarios han sido notificados.</p>

      <h2>10. Ley aplicable</h2>
      <p>La interpretación, validez y resolución de disputas de estos términos se rigen por las leyes de la República Popular China. En caso de disputa, se intentará negociar; si no hay acuerdo, cualquiera de las partes puede presentar una demanda ante el tribunal competente.</p>

      <h2>11. Contacto</h2>
      <p>Si tiene preguntas o sugerencias sobre estos términos, contáctenos a través de los canales correspondientes.</p>
    `
  },
  privacy: {
    title: 'Política de privacidad',
    content: `
      <h2>1. Recopilación de información</h2>
      <p>Valoramos la protección de su privacidad. Al usar nuestros servicios, podemos recopilar la siguiente información:</p>
      <ul>
        <li>Información personal básica: nombre, sexo, fecha de nacimiento, etc.</li>
        <li>Información de contacto: número de teléfono móvil, correo electrónico, etc.</li>
        <li>Información de identidad: número de identificación, fotos, etc.</li>
        <li>Información del dispositivo: modelo, versión del sistema operativo, etc.</li>
        <li>Información de uso: registros de acceso, preferencias de uso, etc.</li>
      </ul>

      <h2>2. Uso de la información</h2>
      <p>La información recopilada se usará para:</p>
      <ul>
        <li>Proporcionar servicios de solicitud de tarjetas de crédito</li>
        <li>Verificar la identidad del usuario</li>
        <li>Mejorar la calidad del servicio</li>
        <li>Enviar notificaciones de servicio</li>
        <li>Cumplir requisitos legales</li>
      </ul>

      <h2>3. Protección de la información</h2>
      <p>Usamos medidas de seguridad estándar del sector para proteger su información personal:</p>
      <ul>
        <li>Cifrado de datos en transmisión y almacenamiento</li>
        <li>Control de permisos de acceso</li>
        <li>Auditorías de seguridad periódicas</li>
        <li>Acuerdos de confidencialidad con empleados</li>
      </ul>

      <h2>4. Compartir información</h2>
      <p>Nos comprometemos a no vender, alquilar ni divulgar su información personal, salvo en los siguientes casos:</p>
      <ul>
        <li>Con su consentimiento explícito</li>
        <li>Cuando lo exija la ley o agencias gubernamentales</li>
        <li>Para proteger nuestros derechos e intereses legítimos</li>
        <li>En caso de fusiones, adquisiciones o transferencia de activos</li>
      </ul>

      <h2>5. Uso de cookies</h2>
      <p>Usamos cookies para mejorar la experiencia del usuario, como recordar preferencias y analizar el tráfico del sitio. Puede desactivar las cookies en la configuración del navegador en cualquier momento.</p>

      <h2>6. Derechos del usuario</h2>
      <p>Según las leyes y regulaciones pertinentes, usted tiene los siguientes derechos:</p>
      <ul>
        <li>Acceder a su información personal</li>
        <li>Corregir información inexacta</li>
        <li>Eliminar su información personal</li>
        <li>Restringir u oponerse al tratamiento de la información</li>
        <li>Portabilidad de datos</li>
      </ul>

      <h2>7. Protección de menores</h2>
      <p>Valoramos la protección de la información personal de menores. Si tiene menos de 18 años, lea esta política con su tutor y use los servicios bajo su guía.</p>

      <h2>8. Actualizaciones de la política</h2>
      <p>Podemos actualizar esta política periódicamente. Para cambios importantes, notificaremos mediante anuncios del sitio web, correo electrónico, etc. Seguir usando nuestros servicios significa que acepta la política actualizada.</p>

      <h2>9. Contacto</h2>
      <p>Si tiene preguntas, comentarios o sugerencias sobre esta política, contáctenos por los siguientes medios:</p>
      <ul>
        <li>Correo electrónico: privacy@diy-promotion.com</li>
        <li>Línea de atención al cliente: 400-123-4567</li>
        <li>Dirección: Distrito Xiangzhou, Zhuhai, Guangdong, China</li>
      </ul>

      <h2>10. Fecha de entrada en vigor</h2>
      <p>Esta política de privacidad entra en vigor el 1 de enero de 2024.</p>
    `
  }
}
