import ContactDashBoardComponent from "@/components/ContactDashBoardComponent";

async function getPendingContacts() {
  try {
    const resp = await fetch(`http://localhost:8080/api/contact-us/pending`, {
      cache: "no-store",
    });
    const res = await resp.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default async function ContactDashboard() {
  const contacts = await getPendingContacts();
  console.log(contacts);
  return (
    <div className='px-[3vmin] flex flex-col items-center gap-[4vmin]'>
      <h1 className='text-[2vmax] font-bold'>
        Rabin&apos;s Photography Contact Dashboard
      </h1>
      <ContactDashBoardComponent contact={contacts} />
    </div>
  );
}
