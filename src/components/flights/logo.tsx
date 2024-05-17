import { Image } from '@nextui-org/react'

const Logo = ({ airline }: { airline: string }) => {
  switch (airline) {
    case 'Binter Canarias':
      return (
        <Image
          src='https://ofertas.bintercanarias.com/hubfs/logo-footer-ESP.jpg'
          alt='Binter Canarias'
        />
      )
    case 'Iberia':
      return (
        <Image
          src='https://www.brandemia.org/wp-content/uploads/2013/10/logo_iberia_principal.jpg'
          alt='Iberia'
        />
      )
    case 'Air Europa':
      return (
        <Image
          src='https://download.logo.wine/logo/Air_Europa/Air_Europa-Logo.wine.png'
          alt='Air Europa'
        />
      )
    case 'Vueling':
      return (
        <Image
          src='https://static.vueling.com/common/images/vueling-logo.png'
          alt='Vueling'
        />
      )
    case 'Ryanair':
      return (
        <Image
          src='https://logohistory.net/wp-content/uploads/2023/05/Ryanair-Emblem.png'
          alt='Ryanair'
        />
      )
    case 'EasyJet':
      return (
        <Image
          src='https://i.pinimg.com/originals/e2/dc/33/e2dc3344d00401e9f61f331db2b234a5.png'
          alt='EasyJet'
        />
      )
    case 'Norwegian':
      return (
        <Image
          src='https://akamai.vgc.no/v2/images/0417623d-fd18-45bb-b568-24c462bc36d8?fit=crop&format=auto&h=1069&w=1900&s=343ff342f773318ef9bb7e34b1e1a2b71b66a019'
          alt='Norwegian'
        />
      )
    case 'Lufthansa':
      return (
        <Image
          src='https://brandemia.org/sites/default/files/inline/images/lufthansa_logo-portada.jpg'
          alt='Lufthansa'
        />
      )
    case 'Air France':
      return (
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Air_France_logo_%281976-1990%29.svg/2560px-Air_France_logo_%281976-1990%29.svg.png'
          alt='Air France'
        />
      )
    case 'KLM':
      return (
        <Image
          src='https://www.puravidauniversity.eu/be/wp-content/uploads/sites/8/2017/08/KLM-logo.png'
          alt='KLM'
        />
      )
    case 'British Airways':
      return (
        <Image
          src='https://globalgoodawards.co.uk/wp-content/uploads/2020/01/british-airways-logo.png'
          alt='British Airways'
        />
      )
    case 'Turkish Airlines':
      return (
        <Image
          src='https://1000logos.net/wp-content/uploads/2020/04/Turkish_Airlines_logo.png'
          alt='Turkish Airlines'
        />
      )
    case 'Emirates':
      return (
        <Image
          src='https://i.pinimg.com/736x/64/9e/1c/649e1c738c189557e58cf78e1ec21cfe.jpg'
          alt='Emirates'
        />
      )
    case 'Qatar Airways':
      return (
        <Image
          src='https://i.pinimg.com/originals/1b/41/61/1b4161ef459e5dfaff29e0a53636691c.png'
          alt='Qatar Airways'
        />
      )
    case 'Etihad Airways':
      return (
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Etihad-airways-logo.svg/1200px-Etihad-airways-logo.svg.png'
          alt='Etihad Airways'
        />
      )
    case 'South African Airways':
      return (
        <Image
          src='https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/SAA_logo_%282019%29.svg/1200px-SAA_logo_%282019%29.svg.png'
          alt='South African Airways'
        />
      )
    case 'Air Asia':
      return (
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/f/f5/AirAsia_New_Logo.svg'
          alt='Air Asia'
        />
      )
    case 'American Airlines':
      return (
        <Image
          src='https://cdn.worldvectorlogo.com/logos/logo-american-airlines.svg'
          alt='American Airlines'
        />
      )
    case 'Oman Air':
      return (
        <Image
          src='https://1000logos.net/wp-content/uploads/2021/04/Oman-Air-logo.png'
          alt='Oman Air'
        />
      )
    case 'Air New Zealand':
      return (
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Air_NewZealand-Logo.svg/744px-Air_NewZealand-Logo.svg.png'
          alt='Air New Zealand'
        />
      )
    case 'EVA Air':
      return (
        <Image
          src='https://1000logos.net/wp-content/uploads/2023/10/EVA-Air-Logo.png'
          alt='EVA Air'
        />
      )
    case 'LATAM Airlines':
      return (
        <Image
          src='https://i.pinimg.com/originals/dd/52/74/dd5274702d1382d696caeb6e0f6980c5.png'
          alt='LATAM Airlines'
        />
      )
    case 'United Airlines':
      return (
        <Image
          src='https://1000logos.net/wp-content/uploads/2017/06/United-Airlines-Logo.png'
          alt='UNITED Airlines'
        />
      )
    case 'Delta Airlines':
      return (
        <Image
          src='https://1000logos.net/wp-content/uploads/2017/09/Delta-Air-Lines-Logo.png'
          alt='Delta Airlines'
        />
      )
  }
}

export default Logo
