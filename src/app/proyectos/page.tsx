import FooterProject from "@/modules/projects/components/FooterProject";
import HeroProjects from "@/modules/projects/components/Hero";
import ProjectCard from "@/modules/project/components/ProjectCard";
export default function ProjectPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <HeroProjects />
      <div className="py-12 bg-gray-200 flex flex-col justify-center items-center">
        <div className="w-max  rounded-2xl bg-white">
          <div className="grid grid-cols-5 ">
            <div className="flex justify-center items-center">
              <button className="px-7 py-3 rounded-xl transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                Todos
              </button>
            </div>

            <div className="flex justify-center items-center">
              <button className="px-5 py-3 rounded-xl transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                Desarrollo Web
              </button>
            </div>

            <div className="flex justify-center items-center">
              <button className="px-5 py-3 rounded-xl transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                App Moviles
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="px-5 py-3 rounded-xl transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                Consultoría
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="px-5 py-3 rounded-xl transition-all duration-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                UI/UX Design
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ProjectCard
              image="/images/c1.jpg"
              category="WEB"
              title="Plataforma E-commerce Retail"
              description="Solución integral B2C con gestión de inventario en tiempo real y pasarela de pagos multicurrency. Aumentó las ventas un 40% en el primer Q."
              technologies={["React", "Node.js"]}
            />
            <ProjectCard
              image="/images/c2.jpg"
              category="Movil"
              title='App de Delivery "FastEat"'
              description="Aplicación nativa iOS y Android con rastreo GPS en vivo para una cadena de restaurantes. Optimizó tiempos de entrega en un 25%."
              technologies={["Flutter", "FireBase"]}
            />
            <ProjectCard
              image="/images/c3.jpg"
              category="SAAS"
              title="Dashboard Financiero SaaS"
              description="Panel administrativo para gestión de activos financieros con visualización de datos complejos y reportes automatizados."
              technologies={["Vue.js", "D3.JS"]}
            />
            <ProjectCard
              image="/images/c4.jpg"
              category="Consultoría"
              title="Transformación Digital BancoSur"
              description="Auditoría técnica y reingeniería de procesos legacy para una de las instituciones bancarias más grandes de la región."
              technologies={["Cloud Migration", "DevOps"]}
            />

            <ProjectCard
              image="/images/c5.jpg"
              category="Móvil"
              title="HealthTrack Pro"
              description="Ecosistema de salud digital conectado a wearables para monitoreo de pacientes crónicos a distancia efectivo."
              technologies={["Swift", "Kotlin"]}
            />
            <ProjectCard
              image="/images/c6.png"
              category="UX/UI"
              title="Rediseño Portal Educativo"
              description="Investigación de usuarios y rediseño completo de la experiencia de aprendizaje para una universidad online líder."
              technologies={["Figma", "Prototyping"]}
            />
          </div>
          <div className="flex justify-center items-center py-10">
            <button className="bg-white hover:bg-gray-300 text-gray-700 font-bold text-md py-2 px-4 rounded">
              Cargar más proyectos ↓
            </button>
          </div>
        </div>
      </div>
      <FooterProject />
    </div>
  );
}
