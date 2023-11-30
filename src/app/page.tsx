import { Button } from "../components/UI/Button"
import { Map } from "../components/Map"
import { RouteInfo } from "../components/RouteInfo"
import { RouteImpact } from "../components/RouteImpact"
import { Article } from "../components/animations/animated-components/Article"
import { Ilustration } from "../components/animations/animated-components/Ilustration"
import Link from "next/link"
import { MapNav } from "@/components/MapNav"



export default function Home() {
  return (
    <>

      <main className="max-md:min-h-[100dvh] md:min-h-[70vh] container m-auto flex flex-wrap items-center justify-center lg:pt-40 pt-20 lg:pb-20 pb-10 xl:flex-row xl:flex-nowrap xl:justify-evenly overflow-hidden">
        <aside className="px-3 lg:px-8 py-5 pt-3 text-black-custom max-w-2xl min-[992px]:max-w-3xl  flex flex-col gap-5 md:py-10 xl:self-start xl:gap-10">
          <h1 className="text-2xl font-bold md:text-5xl lg:text-6xl">Smart Carbon</h1>
          <p className="text-lg py-5 md:text-xl">Revolucionando a mobilidade através da sustentabilidade. Uma pesquisa sobre como a população pode ser aliada na corrida contra o aquecimento global.</p>
          <Link className="w-full" href={"#calculo"}>
            <Button Title={"Saiba mais"} />
          </Link>
        </aside>
        <Ilustration person="hugo" typeAnimation="fromTheRight" />
      </main>


      <section className="relative bg-black-custom skew-y-3">
        <aside className="-skew-y-3 small-notbook:py-20 xl:py-40 container m-auto flex flex-wrap items-center justify-center xl:flex-row-reverse xl:flex-nowrap xl:justify-evenly">
          <article className="text-white px-3 lg:px-8 pb-5 pt-20 md:max-w-2xl small-notbook:max-w-3xl xl:max-2xl">
            <h2 className="text-2xl font-bold pb-5 md:text-3xl">Faça a diferença em suas viagens</h2>
            <p className="text-lg py-5">
              Ao escolher um meio de transporte mais sustentável você desempenha um papel fundamental para um planeta mais saudável para todos. Ajude na corrida contra o aquecimento global e tenha recompensas por isso!</p>
            <p className="text-lg py-5">
              Clique no botão abaixo para saber quanto sua rota emite de gas carbônico e também descubra quanto a emissão corresponde em crédito de carbono.
            </p>
            <fieldset className="w-full flex flex-col gap-5 pb-10 lg:flex-row">
              <Link className="w-full" href={"#map"}>
                <Button Title={"Minha rota"} />
              </Link>
            </fieldset>
          </article>
          <Ilustration person="julia" typeAnimation="fromTheLeft" />
        </aside>
      </section>

      <section className="container m-auto relative flex items-center flex-col xl:flex-row xl:gap-5 pb-32 pt-20" id="calculo">
        <Article />
        <Ilustration person="math" typeAnimation="fromTheBotton" />
      </section >

      <section className="min-h-screen relative bg-black-custom max-lg:py-10" id="map">
        <section className="min-h-[100dvh] flex flex-col gap-10 relative  ">
          <aside className="flex justify-center lg:py-8 xl:items-center px-3">
            <aside className='w-full lg:max-w-4xl lg:px-3 lg:max-xl:m-auto '>
              <MapNav />
            </aside>
            <figure className="max-lg:hidden lg:flex lg:justify-end lg:items-center">
              <Ilustration person="allef" typeAnimation="fromTheBotton" />
            </figure>
          </aside>
          <Map />
          <figure className="px-3 flex flex-col items-center gap-8 lg:hidden ">
            <Ilustration person="allef" typeAnimation="fromTheBotton" />
          </figure>
        </section>
      </section>

      <section className="min-h-screen bg-default" id="info">
        <aside className="container m-auto px-3 lg:px-8 pt-20">
          <h2 className="text-2xl text-black-custom font-bold lg:pb-16">Confira as informações da sua rota</h2>
          <RouteInfo />
        </aside>

        <aside className="container m-auto px-3 lg:px-8 pt-20">
          <h2 className="text-2xl text-black-custom font-bold">O que seria necessário para repor o impacto?</h2>
          <RouteImpact />
        </aside>
      </section>
    </>
  )
}
