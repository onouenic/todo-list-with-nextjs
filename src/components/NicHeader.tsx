import Image from "next/image";

import ytSvg from '../../public/svg/youtube.svg';
import twSvg from '../../public/svg/twitter.svg';
import fbSvg from '../../public/svg/facebook.svg';
import flSvg from '../../public/svg/flickr.svg';
import tgSvg from '../../public/svg/telegram.svg';
import liSvg from '../../public/svg/linkedin.svg';
import igSvg from '../../public/svg/instagram.svg';
import rssSvg from '../../public/svg/rss.svg';

export default function NicHeader() {
  return (
    <header className="flex flex-col gap-4 w-full h-32 shadow-md">
        <div className="flex justify-end items-center mt-4 mr-4">
          <ul className="flex gap-2">
            <li>
              <a href="/quem-somos/" title="Sobre o NIC.br">
                <span className="font-bold text-sm">PT</span>
              </a>
            </li> 
            <li className="pt"><b>|</b></li>
            <li>
              <a href="/about-nic-br/" title="About the NIC.br">
                <span className="font-bold text-sm">EN</span>
              </a>
            </li>
            <li className="pt"><b>|</b></li>
            <li>
              <a href="/sobre-nic-br/" title="sobre  NIC.br">
                <span className="font-bold text-sm">ES</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between mb-4 ml-4">
          <Image className="mb-2" src="/logo-nicbr.png" alt="NIC.br" width={98} height={53}/>
          <div className="flex gap-0.5 items-center mr-2">
            <a href="/imprensa/" className="self-start font-bold text-sm mt-2 mr-2">IMPRENSA</a>

            <a className="flex items-center justify-center rounded-full shadow-black/20 shadow-lg border w-8 h-8" type="button" role="button" href="https://www.youtube.com/nicbrvideos/" target="_blank">
              <Image src={ytSvg} alt="svg do Youtube" width={18} height={18} />
            </a>
            <a className="flex items-center justify-center rounded-full shadow-black/20 shadow-lg border w-8 h-8" type="button" role="button" href="https://www.twitter.com/comunicbr/" target="_blank">
              <Image src={twSvg} alt="svg do Youtube" width={16} height={16} />
            </a>

            <a className="flex items-center justify-center rounded-full shadow-black/20 shadow-lg border w-8 h-8" type="button" role="button" href="https://www.facebook.com/nic.br/" target="_blank">
              <Image src={fbSvg} alt="svg do Youtube" width={10} height={10} />
            </a>
            <a className="flex items-center justify-center rounded-full shadow-black/20 shadow-lg border w-8 h-8" type="button" role="button" href="https://www.flickr.com/photos/nicbr/" target="_blank">
              <Image src={flSvg} alt="svg do Youtube" width={14} height={14} />
            </a>

            <a className="flex items-center justify-center rounded-full shadow-black/20 shadow-lg border w-8 h-8" type="button" role="button" href="https://www.telegram.me/nicbr/" target="_blank">
              <Image src={tgSvg} alt="svg do Youtube" width={14} height={14} />
            </a>

            <a className="flex items-center justify-center rounded-full shadow-black/20 shadow-lg border w-8 h-8" type="button" role="button" href="https://www.linkedin.com/company/nic-br/
            " target="_blank">
              <Image src={liSvg} alt="svg do Youtube" width={14} height={14} />
            </a>
            <a className="flex items-center justify-center rounded-full shadow-black/20 shadow-lg border w-8 h-8" type="button" role="button" href="https://www.instagram.com/nicbr/" target="_blank">
              <Image src={igSvg} alt="svg do Youtube" width={14} height={14} />
            </a>

            <a className="flex items-center justify-center rounded-full shadow-black/20 shadow-lg border w-8 h-8" type="button" role="button" href="/noticias/feed.rss" target="_blank">
              <Image src={rssSvg} alt="svg do Youtube" width={14} height={14} />
            </a>
          </div>
        </div>
      </header>
  )
}