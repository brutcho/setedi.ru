import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Анна",
    role: "Мастер массажа",
    experience: "5 лет опыта",
    specialty: "Классический и лечебный массаж"
  },
  {
    name: "Мария",
    role: "SPA-специалист",
    experience: "7 лет опыта",
    specialty: "Ароматерапия и релакс-процедуры"
  },
  {
    name: "Елена",
    role: "Мастер массажа",
    experience: "4 года опыта",
    specialty: "Спортивный и антицеллюлитный массаж"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Наша команда
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Профессионалы, которые заботятся о вашем комфорте
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-64 h-64 md:w-72 md:h-72 text-center bg-gray-900 p-6 rounded-full border border-purple-900/30 hover:shadow-xl hover:border-purple-600/50 transition-all flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-24 h-24 md:w-28 md:h-28 mb-4 bg-gradient-to-br from-purple-600/20 to-purple-500/20 rounded-full flex items-center justify-center border-4 border-purple-900/30">
                <span className="text-4xl md:text-5xl">👤</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1 text-white">
                {member.name}
              </h3>
              <p className="text-base md:text-lg mb-1 text-purple-400 font-medium">
                {member.role}
              </p>
              <p className="text-xs md:text-sm mb-1 text-gray-400">
                {member.experience}
              </p>
              <p className="text-xs md:text-sm text-gray-300 text-center px-2">
                {member.specialty}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
