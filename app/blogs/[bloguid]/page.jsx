import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default async function BlogUid() {
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center px-4 sm:px-0'>
        <header className='mt-16 py-16 flex flex-col items-center mx-8 gap-6 max-w-[60vmax]'>
          <h1 className='text-[2vmax] font-bold text-center text-neutral-800'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, nihil.
          </h1>
          <p className='text-[1.4vmax] font-medium text-neutral-800 text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            corporis. Quidem, tempore odit explicabo sequi asperiores officiis
            eum incidunt ex provident inventore esse excepturi voluptate optio
            dignissimos corporis sed obcaecati ipsam accusantium natus? Labore
            deleniti accusantium nam odit?
          </p>
        </header>
        <section className='flex flex-col items-center gap-6'>
          <Image
            src='/_DSC4885.jpg'
            alt='blog-cover'
            width={1200}
            height={720}
            className='max-w-[50vmax] sm:max-w-[60vmax]'
          />
          <p className='text-[1.5vmax] sm:text-[1.2vmax] font-medium max-w-[60vmax] text-[#323131]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            consequatur, fuga ipsum eveniet quaerat ratione, rerum nobis
            praesentium doloribus dolores pariatur explicabo ad necessitatibus
            repellat! Eaque pariatur dolores accusantium incidunt quidem laborum
            praesentium veritatis vero voluptatibus suscipit deserunt reiciendis
            sapiente asperiores recusandae earum laudantium aliquam commodi sunt
            totam, hic quae cum soluta unde! Quae dolorem accusantium minus
            tempora placeat ad omnis illo maiores excepturi nobis magnam porro
            libero repudiandae, laboriosam exercitationem ea fugiat vitae sit
            autem itaque saepe! Dolore sapiente optio sit laboriosam corporis
            fugiat, aperiam laudantium rem impedit unde nihil ab explicabo
            debitis cupiditate atque, voluptate voluptatem expedita? Debitis
            quidem porro blanditiis vitae nisi reiciendis quibusdam! Molestias
            harum tempore, nostrum quis eligendi voluptate eum eos doloremque.
            Commodi, sapiente accusamus consequuntur aliquid, impedit itaque
            nobis, doloribus amet nesciunt quas voluptates eum laboriosam dolor
            harum cumque nostrum! Voluptates sit rerum dolores amet ab. Quas
            ipsum expedita sequi, nihil voluptatum assumenda excepturi
            distinctio porro tenetur, ducimus ullam! Perspiciatis sunt error
            enim saepe, nam pariatur recusandae similique, odit vel numquam
            voluptates rerum aliquam est unde beatae earum dolorum nisi
            distinctio. Expedita, laboriosam, eos tenetur ratione esse quae
            obcaecati blanditiis, a nobis alias iusto qui nesciunt consequuntur
            fugiat impedit possimus voluptatibus. Repellat qui, officiis nobis,
            a suscipit facilis molestias eligendi aperiam hic iste maxime amet
            tempora, illo earum deserunt animi reiciendis at ullam enim ex.
            Laboriosam rerum blanditiis vitae temporibus nisi repudiandae
            quisquam quis, inventore nam voluptatem harum ea nesciunt,
            cupiditate labore veritatis. Illum, soluta. Facilis ut aliquid
            quibusdam voluptatum vero magnam optio recusandae obcaecati, facere
            labore eos a. Maiores porro eaque quisquam corrupti adipisci labore
            dolorum obcaecati praesentium quod blanditiis dignissimos quaerat
            temporibus aut autem perferendis aliquid, harum repellendus iusto,
            mollitia nostrum voluptas eveniet omnis libero quibusdam.
            Praesentium natus expedita, in cumque sit eveniet ut obcaecati,
            accusantium necessitatibus nisi mollitia pariatur blanditiis error
            ad enim et eligendi veritatis sed optio maiores numquam omnis.
            Temporibus deleniti itaque repudiandae pariatur eaque dolorem sint,
            consectetur ipsa dolore culpa odio tempore expedita. Dicta magnam
            fuga, vel itaque amet architecto quod aliquam nulla reprehenderit
            corrupti harum eligendi laboriosam quae quas commodi tempora rem
            voluptas voluptate obcaecati. Adipisci dolor cum eum unde quod
            quibusdam est ea magnam porro nisi officiis, asperiores, assumenda
            alias? Totam odit voluptatem praesentium rerum natus eveniet fugit
            aut! Ad ea placeat nihil distinctio ab, et, nesciunt ex laudantium
            ut culpa non rem blanditiis nemo sed inventore molestiae? Id, ab
            quas. Iste tenetur qui eius esse placeat necessitatibus magni! Ullam
            enim expedita earum? Repellat a rem fugiat iste reprehenderit,
            voluptas laudantium ipsam non nisi ipsum magni hic provident
            architecto eos tempora eligendi, eveniet consequuntur repellendus
            tenetur ea blanditiis incidunt! Tempore quod quasi suscipit
            reiciendis. Iusto doloribus recusandae eaque et voluptas deleniti
            odit impedit similique non! Veniam aspernatur illum, tenetur
            cupiditate vero quidem facere! Inventore aspernatur nulla neque
            adipisci, dolorum molestiae omnis perferendis ex pariatur porro aut
            optio deserunt alias minus sint dolor eos voluptates ut deleniti!
            Nulla veritatis voluptatem asperiores error ullam modi totam optio
            excepturi laborum harum corporis minus sunt aut, quisquam natus odit
            sapiente.
          </p>
          <p className='text-[1vmax] font-semibold tracking-widest text-[#323131] self-end'>
            30 AUG, 2023
          </p>
        </section>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
