import { LinksFunction } from '@remix-run/node'
import styles from './spain-map.css'
import { useCallback, useEffect, useState } from 'react';
import SpainMapImage from './spain-map-image';

export let links: LinksFunction = () => {
   return [{ rel: 'stylesheet', href: styles }];
}

const PROVINCES = {
   pr_la_corunya: "La Coruña",
   pr_lugo: "Lugo",
   pr_ourense: "Ourense",
   pr_pontevedra: "Pontevedra",
   pr_asturias: "Asturias",
   pr_cantabria: "Cantabria",
   pr_vizcaya: "Vizcaya",
   pr_guipuzcoa: "Guipúzcoa",
   pr_alava: "Álava",
   pr_navarra: "Navarra",
   pr_la_rioja: "La Rioja",
   pr_leon: "León",
   pr_palencia: "Palencia",
   pr_burgos: "Burgos",
   pr_valladolid: "Valladolid",
   pr_zamora: "Zamora",
   pr_soria: "Soria",
   pr_segovia: "Segovia",
   pr_salamanca: "Salamanca",
   pr_avila: "Ávila",
   pr_huesca: "Huesca",
   pr_zaragoza: "Zaragoza",
   pr_teruel: "Teruel",
   pr_lleida: "Lérida",
   pr_barcelona: "Barcelona",
   pr_tarragona: "Tarragona",
   pr_girona: "Gerona",
   pr_castellon: "Castellón",
   pr_valencia: "Valencia",
   pr_alicante: "Alicante",
   pr_murcia: "Murcia",
   pr_madrid: "Madrid",
   pr_guadalajara: "Guadalajara",
   pr_cuenca: "Cuenca",
   pr_toledo: "Toledo",
   pr_ciudad_real: "Ciudad Real",
   pr_albacete: "Albacete",
   pr_caceres: "Cáceres",
   pr_badajoz: "Badajoz",
   pr_cordoba: "Córdoba",
   pr_jaen: "Jaén",
   pr_huelva: "Huelva",
   pr_sevilla: "Sevilla",
   pr_granada: "Granada",
   pr_almeria: "Almería",
   pr_malaga: "Málaga",
   pr_cadiz: "Cádiz",
   pr_ceuta: "Ceuta",
   pr_melilla: "Melilla"
}

type ProvinceId = keyof typeof PROVINCES


export default function SpainMap() {
   const [hoverProvince, setHoverProvince] = useState<ProvinceId>()

   const onClick = useCallback((event: Event) => {
      const provinceId = (event.target as Element)?.id
      alert(` TODO: abrir fotitos de ${provinceId}`);
   }, [])

   const onMouseEnter = useCallback((event: Event) => {
      const provinceId = (event.target as Element)?.id
      setHoverProvince(provinceId as ProvinceId)
   }, [])

   const onMouseLeave = useCallback((event: Event) => {
      setHoverProvince(undefined)
   }, [])

   useEffect(() => {
      console.log('load');

      const provinceElements = document.querySelectorAll('.province')
      console.log([...provinceElements].map((el) => el.id));
      
      provinceElements.forEach((provinceElement) => {
         provinceElement.addEventListener('click', onClick)
         provinceElement.addEventListener('mouseenter', onMouseEnter)
         provinceElement.addEventListener('mouseleave', onMouseLeave)
      })
      
   }, [])

   return (
      <>
         <h1>Hi</h1>

         <SpainMapImage />

         <p>{hoverProvince ? PROVINCES[hoverProvince] : ''}</p>

      </>
   )

}