import React, { useState } from "react";
import QRScanner from "./QRScanner";
const Guide = (props) => {
  const [scan, setscan] = useState(false);
  const [output, setoutput] = useState(null);
  const [placesData, setplacesData] = useState({
    "Badrinath Temple - Sanctum Sanctorum": [
        "The sanctum sanctorum of the Badrinath Temple is believed to house the image of Lord Badrinarayan, a form of Lord Vishnu, This area is revered as the abode of Lord Vishnu during his meditation, according to Hindu mythology, making it a focal point of devotion and pilgrimage for thousands of years.",
        "Images/Sanctum Sanctorum 1.jpeg",
    ],
    "Sun Temple - Natya Mandapa (Dancing Hall)": [
        "The Natya Mandapa of the Sun Temple in Konark is adorned with intricately carved sculptures depicting various dance forms, reflecting the cultural and artistic vibrancy of the region during the Kalinga dynasty It serves as a testament to the patronage of arts and culture in ancient Odisha.",
        "Images/Natya Mandapa (Dancing Hall).jpg",
    ],
    "Kedarnath Temple - Confluence of Mandakini and Saraswati Rivers": [
        "The confluence of the Mandakini and Saraswati rivers near the Kedarnath Temple is considered sacred in Hinduism It is believed that Lord Shiva imparted knowledge of the Bhagavad Gita to Pandavas here, making it a site of great spiritual significance and a focal point of pilgrimage.",
        "Images/Confluence of Mandakini and Saraswati Rivers.jpeg",
    ],
    "Somnath Temple - Shivling": [
        "The Shivling at Somnath Temple is one of the twelve Jyotirlingas, a sacred representation of Lord Shiva The temple has a long history of destruction and reconstruction, symbolizing resilience and devotion among its followers.",
        "Images/Shivling.jpeg",
    ],
    "Sanchi Stupa - Main Stupa": [
        "The main stupa at Sanchi is one of the oldest stone structures in India, dating back to the Mauryan period It represents the essence of Buddhist architecture and art, showcasing intricate carvings and depictions of Buddhist teachings.",
        "Images/Main Stupa.jpg",
    ],
    "Ramanathaswamy Temple - Corridor with 1,000 Pillars": [
        "The corridor with 1,000 pillars at the Ramanathaswamy Temple is a marvel of Dravidian architecture, known for its grandeur and intricate carvings It is a significant pilgrimage site for Shaivites and Vaishnavites alike.",
        "Images/Corridor with 1,000 Pillars.jpeg",
    ],
    "Vaishno Devi Temple - Holy Cave": [
        "The Holy Cave at Vaishno Devi Temple is where devotees pay homage to the manifestation of the Mother Goddess It is believed that Mata Vaishno Devi meditated in this cave and granted blessings to her devotees.",
        "Images/Holy Cave.jpg",
    ],
    "Siddhivinayak Temple - Siddhivinayak Ganapati": [
        "The Siddhivinayak Ganapati at the Siddhivinayak Temple is a revered representation of Lord Ganesha, known as the remover of obstacles and the bestower of success Devotees seek blessings for auspicious beginnings and overcoming challenges.",
        "Images/Siddhivinayak Ganapati.jpeg",
    ],
    "Gangotri Temple - Bhagirathi Shila": [
        "The Bhagirathi Shila at Gangotri Temple marks the spot where Goddess Ganga is believed to have descended to Earth from the heavens It is a symbol of the sacred origin of the River Ganga, revered by millions as a source of purity and salvation.",
        "Images/Bhagirathi Shila.jpeg",
    ],
    "Golden Temple - Harmandir Sahib": [
        "Harmandir Sahib, also known as the Golden Temple, is the holiest shrine in Sikhism Its Golden Dome represents spiritual and temporal guidance, embodying Sikh principles of equality, community service, and devotion to God.",
        "Images/Harmandir Sahib.jpg",
    ],
    "Shri Jagannath Temple - Garbhagriha": [
        "The Garbhagriha (sanctum sanctorum) of the Shri Jagannath Temple enshrines the deities Lord Jagannath, Lord Balabhadra, and Devi Subhadra It is a significant pilgrimage site for Hindus and a center of cultural and religious activities in Puri, Odisha.",
        "Images/Shri Jagannath Temple - Garbhagriha.jpeg",
    ],
    "Yamunotri Temple - Yamuna Kund (Hot Spring)": [
        "The Yamuna Kund near the Yamunotri Temple is a natural hot spring believed to have medicinal properties Pilgrims take a dip in this holy spring before visiting the temple, making it a place of purification and spiritual cleansing, symbolizing the purity of the Yamuna River and its importance in Hindu mythology.",
        "Images/Yamuna Kund (Hot Spring).jpg",
    ],
    "Meenakshi Temple - Hall of Thousand Pillars": [
        "The Hall of Thousand Pillars within the Meenakshi Temple complex is known for its massive pillars and intricate carvings This area represents the architectural brilliance of Dravidian temples and the artistic mastery of craftsmen, showcasing the cultural and historical legacy of Madurai's temple architecture.",
        "Images/Hall of Thousand Pillars.jpeg",
    ],
    "Amarnath Cave Temple - Ice Lingam (Shivling)": [
        "The ice lingam, or Shivling, formed inside the Amarnath Cave during summer months is a natural phenomenon considered sacred by devotees It symbolizes the presence of Lord Shiva and the mystical aura surrounding the Amarnath Cave, attracting pilgrims seeking spiritual experiences and blessings.",
        "Images/Ice Lingam (Shivling).jpeg",
    ],
    "Lingaraja Temple - Sanctum Sanctorum": [
        "The sanctum sanctorum of the Lingaraja Temple houses the lingam of Lord Shiva It is a focal point of worship and rituals, symbolizing the divine presence of Lord Lingaraja and the spiritual essence of the temple, which is one of the most revered shrines in Bhubaneswar and a testament to Odisha's temple architecture.",
        "Images/Lingaraja Temple - Sanctum Sanctorum.jpeg",
    ],
    "Tirupati Balaji Temple - Garbhagriha (Inner Sanctum)": [
        "The Garbhagriha of the Tirupati Balaji Temple houses the idol of Lord Venkateswara It is the holiest area of the temple where devotees offer prayers and seek blessings. The sanctum symbol",
        "Images/Tirupati Balaji Temple - Garbhagriha (Inner Sanctum).jpeg",
    ],
    "Kanchipuram Temples - Sanctum Sanctorum": [
        "The sanctum sanctorum of the Kanchipuram Temples houses various deities depending on the specific temple These temples are renowned for their Dravidian architecture, intricate carvings, and religious significance in Hinduism. They are associated with saints, scholars, and spiritual leaders, contributing to Kanchipuram's status as a center of religious and cultural learning in Tamil Nadu.",
        "Images/Kanchipuram Temples - Sanctum Sanctorum.jpg",
    ],
    "Khajuraho Temple - Temple Complex": [
        "The entire Khajuraho Temple complex is a UNESCO World Heritage site famous for its exquisite sculptures depicting various aspects of life, mythology, and spiritual teachings The temples reflect the artistic and architectural brilliance of the Chandela dynasty, showcasing a blend of Hindu and Jain traditions and serving as a testament to India's cultural heritage.",
        "Images/Khajuraho Temple - Temple Complex.jpeg",
    ],
    "Virupaksha Temple - Garbhagriha (Inner Sanctum)": [
        "The Abhishek Mandap within the Akshardham Temple complex is where devotees participate in rituals like the Abhishek ceremony, symbolizing purification and devotion The temple showcases traditional Indian architecture, cultural heritage, and spiritual teachings, attracting visitors from around the world to experience its grandeur and serene ambiance.",
        "Images/Virupaksha Temple - Garbhagriha (Inner Sanctum).jpeg",
    ],
    "Shri Digambar Jain Lal Mandir - Jain Shrine": [
        "The Jain shrine within Shri Digambar Jain Lal Mandir is dedicated to Lord Mahavir, a revered figure in Jainism The temple is one of the oldest Jain temples in Delhi, reflecting the city's historical connections to Jain philosophy and spirituality. It serves as a place of worship, meditation, and learning for followers of Jain traditions.",
        "Images/Jain Shrine.jpeg",
    ],
    "Gomateshwara Temple - Bahubali Statue": [
        "The Gomateshwara Temple is famous for its monolithic statue of Lord Bahubali, a figure revered in Jainism The 57-foot tall statue symbolizes renunciation and spiritual elevation, attracting pilgrims and tourists to Shravanabelagola. The temple complex also includes shrines, meditation spaces, and architectural marvels showcasing Jain heritage and values.",
        "Images/Bahubali Statue.jpg",
    ],
    "Shirdi Sai Baba Temple - Samadhi Mandir (Final Resting Place)": [
        "The Samadhi Mandir within the Shirdi Sai Baba Temple complex is where the final resting place (Samadhi) of Sai Baba is located The temple is a major pilgrimage center for devotees of Sai Baba, known for his teachings of love, compassion, and spiritual enlightenment, attracting millions of visitors seeking blessings and guidance",
        "Images/Samadhi Mandir (Final Resting Place).jpeg",
    ],
    "Shri Padmanabhaswamy Temple - Sanctum Sanctorum": [
        "The sanctum sanctorum of the Shri Padmanabhaswamy Temple houses the deity Lord Padmanabhaswamy, a form of Lord Vishnu The temple is renowned for its Dravidian architecture, the idol adorned with gold and precious jewels, and its spiritual significance in Kerala's cultural and religious landscape, attracting devotees and visitors from far and wide.",
        "Images/Shri Padmanabhaswamy Temple - Sanctum Sanctorum.jpg",
    ],
    "Dwarkadhish Temple	- Garbhagriha (Inner Sanctum)": [
        "The Garbhagriha of the Dwarkadhish Temple houses the deity Lord Dwarkadhish, a form of Lord Krishna The temple is one of the Char Dham pilgrimage sites and holds immense religious importance in Hinduism, especially as the abode of Lord Krishna during his earthly incarnation, making it a revered destination for Krishna devotees and pilgrims.",
        "Images/Dwarkadhish Temple - Garbhagriha (Inner Sanctum).jpg",
    ],
    "Laxminarayan Temple - Main Shrine": [
        "The main shrine of the Laxminarayan Temple is dedicated to Lord Vishnu and Goddess Lakshmi It is a prominent landmark in Delhi, showcasing Hindu architectural styles and spiritual symbolism related to prosperity and divine blessings. The temple is a place of worship, meditation, and cultural heritage in the heart of India's capital city",
        "Images/Laxminarayan Temple - Main Shrine.jpg",
    ],
    "Iskcon Temple - Radha Krishna Temple": [
        "The Iskcon Temple, dedicated to Radha and Krishna, is a hub of devotion, spirituality, and cultural activities in Vrindavan It represents the teachings of the International Society for Krishna Consciousness (ISKCON), promoting Krishna bhakti, meditation, and the study of ancient scriptures like the Bhagavad Gita among devotees and visitors.",
        "Images/Iskcon Temple - Radha Krishna Temple.jpeg",
    ],
    "Mahabodhi Temple - Bodhi Tree": [
        "The Garbhagriha of the Kamakhya Temple houses the deity Kamakhya Devi, a form of Shakti The temple is associated with Tantric traditions, fertility rituals, and the divine feminine energy of the goddess, making it a unique and revered site for devotees of Shaktism and Tantra in Assam and across India.",
        "Images/Mahabodhi Temple - Bodhi Tree.jpg",
    ],
    "Neelkanth Mahadev Temple - Shivalinga (Sacred Lingam)": [
        "The sacred Lingam in the Neelkanth Mahadev Temple represents Lord Shiva as Neelkanth, the blue-throated deity who consumed poison during the churning of the ocean The temple's location near Rishikesh, amidst the Himalayan foothills, adds to its spiritual aura and significance as a place of worship and pilgrimage in Uttarakhand.",
        "Images/Neelkanth Mahadev Temple - Shivalinga (Sacred Lingam).jpg",
    ],
    "Mukteswara Temple - Sanctum Sanctorum": [
        "The sanctum sanctorum of the Mukteswara Temple houses the deity Mukteswara, a form of Lord Shiva The temple is renowned for its Kalinga architecture, intricate carvings, and sculptures depicting mythological themes, making it a cultural and historical treasure in Bhubaneswar, reflecting Odisha's rich heritage and spiritual legacy",
        "Images/Mukteswara Temple - Sanctum Sanctorum.jpeg",
    ],
    "Sri Ranganathaswamy Temple - Garbhagriha (Inner Sanctum)": [
        "The Garbhagriha of the Sri Ranganathaswamy Temple houses the deity Lord Ranganatha, a reclining form of Lord",
        "Images/Sri Ranganathaswamy Temple - Garbhagriha (Inner Sanctum).jpeg",
    ],
}
);
  if (output && placesData[output][0]) {
    translateAndSpeak();
  }
  async function translateAndSpeak() {
    const text = placesData[output][0];
    const sourceLang = "en";
    const targetLang = document.getElementById('selectTargetLanguage').value;
    const translatedText = await translateText(text, sourceLang, targetLang);
    speakText(translatedText, targetLang);
  }

  async function translateText(text, sourceLang, targetLang) {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(
        text
      )}`
    );
    const data = await response.json();
    const translatedText = data[0][0][0];
    return translatedText;
  }

  function speakText(text, lang) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.lang = lang;
    utterance.pitch=1;
    utterance.rate=0.8;
    speechSynthesis.speak(utterance);
  }
  return (
    <div>
      {scan ?<div className={output?`hidden`:''}> <QRScanner output={output} setoutput={setoutput} className /></div> : ""}
      <div className="butopt flex gap-2 w-[50%] justify-center items-center">
      <button
        onClick={() => {
          setscan(!scan);
        }}
        className="m-5 px-4 py-3 bg-[#b3dd62] hover:bg-[#77943d] text-lg font-medium rounded-full text-black"
      >
        Start Scanner
      </button>
        <div className="w-full max-w-xs mx-auto ">
      <label
        htmlFor="selectTargetLanguage"
        className="block text-sm font-medium text-white mb-2"
      >
        Choose Language
      </label>
      <div className="relative">
        <select
          id="selectTargetLanguage"
          className="block appearance-none w-full bg-gray-700 border border-gray-600 text-white py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-500"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </div>
      </div>
    </div>
    </div>
  <div className="img w-[400px] h-[400px] bg-[#acaf9c] rounded-full absolute left-10 z-30">
        {output?<img
          src={`src/${placesData[output][1]}`}
          className="w-[400px] h-[400px] rounded-full"
          alt=""
        />:<img
        src={`src/Static/2.jpg`}
        className="w-[400px] h-[400px] rounded-full"
        alt=""
      />}
       
      </div>
      <div
        className="circle w-[100%] overflow-hidden z-20 h-[600px]  bg-black
rounded-tl-full rounded-tr-full text-white flex justify-end pt-40 relative"
      >
        {output ? (
          <div className="both w-[40%] text-center mr-72">
            <h1 id="textToSpeak" onClick={translateAndSpeak}>
              {placesData[output][0]}
            </h1>
          </div>
        ) : (
          <div className="both w-[40%] text-center mr-72">
            <h1 id="textToSpeak" onClick={translateAndSpeak}>
            "Information About the place after scanning the QR"
            </h1>
          </div>
          
        )}
      </div>
    </div>
  );
};
export default Guide;
