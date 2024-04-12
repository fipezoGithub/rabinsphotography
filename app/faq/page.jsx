import FAQAccordian from "@/components/FaqAccordian";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Navbar from "@/components/Navbar";

export default async function FAQ() {
  const FAQData = [
    {
      q: "When Do You Expect You To Show Us And Which Events We Prefer To Cover From?",
      ans: "We usually cover all the main rituals and events in details. We reach at your venue at the day of wedding onwards 7-8am to start our work for the whole day. On the day of reception we find important events to capture mainly and we get our project done by almost 11-11.30 of night. We provide every possible detail in these amount of durations and gift you your memorable album without any regret or worry.",
    },
    {
      q: "What Will Happen If Any Emergency Occurs From You Or Any Breakdown Shows Up In The Middle Of A Ceremony?",
      ans: "We have never faced such situation ever in past years of our business history. Though even if any major breakdown or emergency like this ever occur we assure you that you'll have your wedding shoot continued still the same way, with our always readymade backup plan and replacement team member with equal expert qualities. You're trusting us for your special day and it's our satisfaction in keeping it that honored way.",
    },
    {
      q: "Do You Also Provide Video Services?",
      ans: "Yes, we do provide videography with exclusive quality of content. We believe not just freezed stills are enough to describe a tale metaphorically, a motion in flow of emotion is needed indeed. We have our own expert team member for videography section who are extremely professional. We provide you cinematic video with suitable tremendous audible quality of background musics or as per our client's choice if they want to include any of their special; with promising video quality of FHD+ and 4k in detail.",
    },
    {
      q: "If I Plan To Shoot Our Marriage At My Own Residence, Can We Have You To Shoot It ?",
      ans: "Yes, surely. That's not a matter of fact where you are hosting your ceremony. In fact due to recent pandemic regulations, intimate wedding is the only trending option to go for Kolkata based weddings with compact number of guests. We will also have lesser crew to involve into your venue and that will be an advantage for you too to have your dream day framed in a pocket friendly budget with us, depending upon your requirements.",
    },
    {
      q: "Apart From Booking What Are The Other Expenses A Client Should Keep In Mind To Carry Out ?",
      ans: "Apart from the booking other things that are expected from clients' end are like transport and travel cost of our members, their accommodation and food after or during the shoot. In addition as well as the delivery charges of the products are carried out by clients. There are no extra hidden charges out of the contract agreement.",
    },
    {
      q: "How Long Will I Have To Wait For My Wedding Album ?",
      ans: "Process of delivery of an album for Kolkata based weddings depends on the budget and response from our clients. After the shoot is over we provide the unprocessed '.jpeg' files to our clients depending on their budget or we serve the edited pictures to them to select which ones of them they would like to fill their album with and after the response we start our work. In general it takes two months to process the editing and producing the album considering the delay in response due to clients' post wedding schedules . If you are in hurry with the delivery you will have to consult that before with us and priority list can re-shaped considering their budgets too.",
    },
    {
      q: "What Is A Pre Wedding And How Qpidindia Take Care Of It ?",
      ans: "Special thing about pre-wedding is you can spend your day together without any wedding ritual to follow as it is not the part of main wedding events, in short you can freely just go as you like and be yourself. We, Qpid Event Photography, the Best wedding photographer in Kolkata are open up for amazing pre weddings and for location we always go first for our client's own suggestion where they have had their special memories together. Because it's their wedding, and their own story is the key which is gonna lit up their album to be different than others. We don't recommend common used trending poses or fashions which might look artificial in front of lenses. Our experts will also be with you to help you to choose your colors and styles that might suit you with the backdrop of location and its lights. Even if you are out of ideas with any good location we go for your known places where you can feel comfortable, because when you are familiar with a location you can make better images as you know how to use everything to your advantage to make your own album smitten all over with 'your story'.",
    },
    {
      q: "I Am Late With Budget Plan For Wedding Photography And Out Of Expenses. Can I Still Get My Wedding Film Shot By You ?",
      ans: "On a narrow budget we can also serve you but with compressed services with a tight crew. Wedding is something of a very large budget we understand so we have various flexible packages for difference budget scenarios. So, if you are out of a good expense for us and want to have a wedding photographer in Kolkata to shoot your big fat special day we will definitely be there for your service of a dream album with your numerous guests but only downfall will be that we won't be able to cover everything and that's why you'll need to enlist your priorities for your shoots to discuss with us and we will let you know how much is considerable to impress your needs. A minimization in the duration of an event can expose the quality and quantity of frames. But, if you are in short with expenses you'll have to contact and talk to us with clarity which might help to consider offers for you, as communication is the prime key for negotiation.",
    },
    {
      q: "What Key Strengths Will Be There From Qpid Event Photography To Cover My Wedding? Will Minimizing The Crew Count Alter The Budge",
      ans: "We have our expert team members with us to shoot any Kolkata based big wedding event along with well experienced planners who will guide you with well choreographed poses, drone operators to get stunning shots. The team work as an invisible shadow behind with various different kinds of cameras and lenses and every situational needed genuine instruments, skilled team for candid shots including excellent bridal portraits. We always are ready with backup equipments and contacts with every members and even plan B if any breakdown or emergency occurs during the shoot so that nothing from us ever cause any inconvenience to your special day. We are always strategic with our team and their positions during an event for the best shoot, that's why we don't recommend any shortage of crew for a big scale ceremony. However, for intimate wedding lesser member is good to avoid any obstruction in views and places so guests feel free to roam and client feels easier with lesser people to co-ordinate with. And we also consider your expense with our reduction of crew too.",
    },
    {
      q: "Do You Capture Behind The Scenes During The Bridal Makeover ?",
      ans: "Many brides' dream is to get them captured behind the scenes of main wedding, the process of her transformation into a stunning bride. And we definitely do that but considering a consultancy with the people who work hard to process their valuable hardwork. As a professional we also understand other's profession and we are very careful to avoid any inconvenience or awkward situation during our work",
    },
    {
      q: "What Are Your Budget Estimates?",
      ans: "Having an idea about a budget estimation before stalking into more is important. We generally provide our best at 80k per day including your photo, video, with album and your wedding film. But there are also different flexible budget plans altering the services, and for that you need to talk to us. Destination weddings can also differ in prices with your requirements. It all takes a clear conversation and discussion to understand the terms and conditions regarding our expenses and budget systems.",
    },
    {
      q: "Can I Select The Music For My Wedding Video ?",
      ans: "Yes, you can. It's your wedding so the the key of the specialty lies within your choices which can only turn the album telling 'your story'. We positively recommend you to let us know if there is any special background music of your taste to put behind your tale. Nothing to worry even if you don't come up with, we will surely do the best we can to exceed your expectations anyway.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className='bg-[linear-gradient(180deg,_rgba(207,196,224,1)_0%,_rgba(253,253,253,1)_50%,_rgba(207,196,224,1)_100%)] flex flex-col items-center justify-center'>
        <header className='mt-16 py-16 flex flex-col items-center mx-8 gap-6'>
          <h1 className='text-[2.5vmax] font-semibold py-2 montserrat relative text-neutral-800 capitalize'>
            frequently asked questions {"("}FAQ{")"}
          </h1>
          <p className='py-2 text-[1.4vmax] w-[50vmax] text-center text-neutral-800'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            explicabo nihil debitis cumque odit facilis quasi, tempora ducimus
            iure vel? Inventore dignissimos nostrum perspiciatis!
          </p>
        </header>
        <section className='flex flex-col items-stretch sm:items-center justify-center gap-6 my-8 flex-wrap'>
          {FAQData.map((data, index) => (
            <FAQAccordian data={data} key={index} />
          ))}
        </section>
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
