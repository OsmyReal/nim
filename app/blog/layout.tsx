'use client';

import { TextMorph } from '@/components/ui/text-morph';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { useState, useEffect } from 'react';
import AdBanner from '../../components/AdBanner'; // Importa el componente del anuncio
import AdSense from '../../components/AdSense';

function CopyButton() {
  const [text, setText] = useState('Copiar');
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  setTimeout(() => {
    setText('Copiar');
  }, 2000);

  return (
    <button
      onClick={() => {
        setText('Copiado');
        navigator.clipboard.writeText(currentUrl);
      }}
      className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 transition-colors dark:text-zinc-400"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  );
}

function UnlockButton() {
  const [text, setText] = useState('Comenzar');
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isFromGoogle, setIsFromGoogle] = useState(false);

  useEffect(() => {
    // Verificar si el usuario viene desde Google
    const referrer = document.referrer;
    if (referrer.includes('google.com')) {
      setIsFromGoogle(true);
      localStorage.setItem('cameFromGoogle', 'true');
    } else {
      const cameFromGoogle = localStorage.getItem('cameFromGoogle');
      if (cameFromGoogle === 'true') {
        setIsFromGoogle(true);
      }
    }
  }, []);

  const handleClick = async () => {
    if (!isFromGoogle) {
      // Si no viene desde Google, no hacer nada
      return;
    }

    if (text === 'Comenzar') {
      // Primera acción: Cambiar a "Compartir"
      setText('Compartir');
    } else if (text === 'Compartir') {
      // Segunda acción: Intentar compartir
      const shareText = '¡Hey! Necesito tu ayuda para conseguir algo gratis 🎁. Solo suscríbete al canal de YouTube https://www.youtube.com/@OsmyReal y estarás ayudándome muchísimo. ¡Gracias, eres increíble! 🙌';
      const shareUrl = 'https://www.youtube.com/@OsmyReal';

      if (navigator.share) {
        // Si el navegador admite compartir nativo
        try {
          await navigator.share({
            title: '¡Ayúdame a conseguir algo gratis!',
            text: shareText,
            url: shareUrl,
          });
          // Si se compartió con éxito, cambiar a "Espere..."
          setText('Espere...');
          setIsUnlocking(true);
          startCountdown();
        } catch (error) {
          console.error('Error al compartir:', error);
          // Si no se compartió, mantener en "Compartir"
          setText('Compartir');
        }
      } else {
        // Si no admite compartir nativo, abrir WhatsApp
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        window.open(whatsappUrl, '_blank');
        // Cambiar a "Espere..." después de abrir WhatsApp
        setText('Espere...');
        setIsUnlocking(true);
        startCountdown();
      }
    }
  };

  const startCountdown = () => {
    // Simular la cuenta regresiva de 30 segundos
    setTimeout(() => {
      // Redirigir directamente sin cambiar el texto
      window.location.href = 'https://ir.osmyreal.com';
    }, 30000); // Cambiado de 15000 (15 segundos) a 30000 (30 segundos)
  };

  return (
    <button
      onClick={handleClick}
      className="flex h-10 w-[120px] shrink-0 items-center justify-center rounded-full bg-black px-4 text-base font-medium text-zinc-50 shadow-xs transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
      disabled={isUnlocking || !isFromGoogle} // Deshabilitar el botón durante el proceso de desbloqueo o si no viene de Google
      type="button"
    >
      <TextMorph>{isFromGoogle ? text : 'Bloqueado'}</TextMorph>
    </button>
  );
}

export default function LayoutBlogPost({ children }: { children: React.ReactNode }) {
  const [isFromGoogle, setIsFromGoogle] = useState(false);

  useEffect(() => {
    // Verificar si el usuario viene desde Google
    const referrer = document.referrer;
    if (referrer.includes('google.com')) {
      setIsFromGoogle(true);
      localStorage.setItem('cameFromGoogle', 'true');
    } else {
      const cameFromGoogle = localStorage.getItem('cameFromGoogle');
      if (cameFromGoogle === 'true') {
        setIsFromGoogle(true);
      }
    }
  }, []);

  return (
    <>
      {/* Aquí agregamos el anuncio de AdSense */}
      <AdSense pId="8851903508857633" />

      {/* Anuncio en la parte superior */}
      <div className="w-full mt-6">
        <AdBanner
          dataAdFormat="auto"
          dataFullWidthResponsive={true}
          dataAdSlot="5585401579"
        />
      </div>

      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />

      <div className="absolute right-4 top-24">
        <CopyButton />
      </div>

      <main className="prose prose-gray mt-24 pb-20 prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
        {children}
      </main>

      {/* Anuncio al final del artículo */}
      <div className="w-full mt-6">
        <AdBanner
          dataAdFormat="auto"
          dataFullWidthResponsive={true}
          dataAdSlot="4681896322"
        />
      </div>

      {/* Sección de contacto */}
      <section className="mt-24">
        <h3 className="mb-5 text-lg font-medium">Regalo</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          {isFromGoogle
            ? 'Consigue un regalo exclusivo de OsmyReal. Presiona el botón de abajo para comenzar y disfruta de esta sorpresa especial.'
            : 'Para conseguir el regalo de OsmyReal, debes abrir el sitio osmyreal.com desde Google. Por favor, ve a Google, escribe "osmyreal" y abre el sitio web desde ahí.'}
        </p>
        <div className="flex items-center justify-start space-x-3">
          {/* Botón de Regalo en lugar de los botones de redes sociales */}
          <UnlockButton />
        </div>
      </section>
    </>
  );
}