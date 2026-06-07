export const medicalData = {
//   fracture: {
//     title: { en: "Fracture", hi: "फ्रैक्चर (हड्डी टूटना)", mr: "फ्रॅक्चर (हाड मोडणे)" },
//     image: require("../assets/images/fracture.jpg"),
//     audio: { en: require("../assets/audio/fracture_en.wav"), hi: require("../assets/audio/fracture_hi.wav"), mr: require("../assets/audio/fracture_mr.wav") },
//     steps: {
//       en: [
//         { id: 1, t: "Stop Bleeding", d: "Apply firm pressure around the wound. Avoid direct pressure on protruding bones." },
//         { id: 2, t: "Immobilize", d: "Use rigid materials (boards, sticks) as splints. Pad with soft cloth." },
//         { id: 3, t: "Secure", d: "Ensure the splint covers the joints above and below the fracture." },
//         { id: 4, t: "Cold Compress", d: "Apply cloth-wrapped ice to reduce swelling." },
//         { id: 5, t: "Check Circulation", d: "Check fingers/toes every 15 mins for numbness or blueness." },
//         { id: 6, t: "Shock Management", d: "Lay the person down and raise feet if legs aren't injured." }
//       ],
//       hi: [
//         { id: 1, t: "रक्तस्राव रोकें", d: "घाव पर साफ कपड़े से दबाव डालें। बाहर निकली हड्डी पर सीधा दबाव न दें।" },
//         { id: 2, t: "स्थिर करें", d: "सख्त सामग्री का उपयोग करके स्प्लिंट लगाएं और पैडिंग के लिए कपड़े का उपयोग करें।" },
//         { id: 3, t: "जोड़ों को बांधें", d: "सुनिश्चित करें कि स्प्लिंट फ्रैक्चर के ऊपर और नीचे के जोड़ों को कवर करे।" },
//         { id: 4, t: "ठंडी सिकाई", d: "सूजन कम करने के लिए कपड़े में लपेटकर बर्फ का उपयोग करें।" },
//         { id: 5, t: "रक्त प्रवाह जांचें", d: "हर 15 मिनट में देखें कि उंगलियां नीली या ठंडी तो नहीं हो रहीं।" },
//         { id: 6, t: "सदमे का प्रबंधन", d: "व्यक्ति को लेटाएं और पैर थोड़े ऊपर उठाएं (यदि पैर में चोट न हो)।" }
//       ],
//       mr: [
//         { id: 1, t: "रक्तस्त्राव थांबवा", d: "स्वच्छ कापडाने दाबा. बाहेर आलेल्या हाडावर थेट दाब देऊ नका." },
//         { id: 2, t: "स्थिर करा", d: "कडक वस्तूंचा वापर करून स्प्लिंट लावा आणि मऊ कापडाचे पॅडिंग वापरा." },
//         { id: 3, t: "सांधे बांधा", d: "स्प्लिंट फ्रॅक्चरच्या वरच्या आणि खालच्या सांध्याला कव्हर करेल याची खात्री करा." },
//         { id: 4, t: "थंड शेक", d: "सूज कमी करण्यासाठी कापडात गुंडाळून बर्फाचा वापर करा." },
//         { id: 5, t: "रक्त प्रवाह तपासा", d: "दर १५ मिनिटांनी बोटे निळी किंवा थंड होत नाहीत ना ते पहा." },
//         { id: 6, t: "शॉक व्यवस्थापन", d: "रुग्णाला झोपवा आणि पाय थोडे वर उचला (पायाला दुखापत नसल्यास)." }
//       ]
//     },
//     dos: {
//       en: ["Keep the person as still as possible.", "Use the uninjured leg as a splint.", "Provide reassurance.", "Monitor breathing."],
//       hi: ["व्यक्ति को जितना हो सके स्थिर रखें।", "सामग्री न होने पर घायल अंग को बांध दें।", "मरीज को लगातार आश्वासन देते रहें।", "सांस लेने की प्रक्रिया पर नजर रखें।"],
//       mr: ["व्यक्तीला शक्य तितके स्थिर ठेवा.", "जखमी अवयवाला दुसऱ्या निरोगी अवयवाशी बांधा.", "रुग्णाला धीर द्या.", "श्वासोच्छवासावर लक्ष ठेवा."]
//     },
//     donts: {
//       en: ["Do NOT try to realign bones.", "Do NOT move unless in danger.", "Do NOT give food/drink.", "Do NOT apply ice directly."],
//       hi: ["हड्डी को सीधा करने की कोशिश न करें।", "व्यक्ति को जगह से न हिलाएं।", "कुछ भी खाने या पीने को न दें।", "बर्फ को सीधे त्वचा पर न रगड़ें।"],
//       mr: ["हाड सरळ करण्याचा प्रयत्न करू नका.", "रुग्णाला हलवू नका.", "काहीही खाऊ किंवा पाजू नका.", "बर्फ थेट त्वचेवर लावू नका."]
//     }
//   },

  snake_bite: {
    title: { en: "Snake Bite", hi: "सर्पदंश", mr: "सर्पदंश" },
    image: require("../assets/images/snake_bite.jpg"),
    audio: { en: require("../assets/audio/snakeBite_english.wav"), hi: require("../assets/audio/snakeBite_hindi.wav"), mr: require("../assets/audio/snakeBite_marathi.wav") },
    steps: {
      en: [
        { id: 1, t: "Safety First", d: "Move away from the snake to a safe area." },
        { id: 2, t: "Stay Calm", d: "Keep the victim calm to slow venom spread." },
        { id: 3, t: "Remove Items", d: "Remove jewelry and tight clothing before swelling begins." },
        { id: 4, t: "Immobilize", d: "Immobilize the limb using a splint. Keep it below heart level." },
        { id: 5, t: "Clean Wound", d: "Clean the wound gently with soap and water. Do not scrub." },
        { id: 6, t: "Position", d: "Lay the person down. Use recovery position if they vomit." }
      ],
      hi: [
        { id: 1, t: "सुरक्षा", d: "सांप से दूर सुरक्षित स्थान पर जाएं।" },
        { id: 2, t: "शांत रहें", d: "मरीज को शांत रखें ताकि जहर धीरे फैले।" },
        { id: 3, t: "चीजें हटाएं", d: "सूजन आने से पहले अंगूठी, घड़ी और तंग कपड़े उतार दें।" },
        { id: 4, t: "स्थिर करें", d: "कटे हुए अंग को लकड़ी की पट्टी (splint) से स्थिर करें।" },
        { id: 5, t: "घाव सफाई", d: "घाव को साबुन और पानी से धीरे से साफ करें।" },
        { id: 6, t: "करवट दिलाएं", d: "उल्टी होने पर बाईं करवट (recovery position) में लिटाएं।" }
      ],
      mr: [
        { id: 1, t: "सुरक्षित जागी जा", d: "सापापासून दूर सुरक्षित ठिकाणी जा." },
        { id: 2, t: "शांत राहा", d: "रुग्णाला शांत ठेवा जेणेकरून विष हळू पसरले." },
        { id: 3, t: "वस्तू काढा", d: "सूज येण्यापूर्वी अंगठी, घड्याळ आणि घट्ट कपडे काढून टाका." },
        { id: 4, t: "स्थिर करा", d: "जखमी अवयवाला लाकडी पट्टीने (splint) स्थिर करा." },
        { id: 5, t: "जखम स्वच्छ करा", d: "जखम साबण आणि पाण्याने हळूवारपणे स्वच्छ करा." },
        { id: 6, t: "कुशीवर झोपवा", d: "उलटी होत असल्यास डाव्या कुशीवर (recovery position) झोपवा." }
      ]
    },
    dos: {
      en: ["Keep limb still.", "Transport to hospital immediately.", "Take photo of snake safely.", "Monitor pulse."],
      hi: ["अंग को स्थिर रखें।", "तुरंत अस्पताल ले जाएं।", "सांप की फोटो लें।", "सांसों पर नजर रखें।"],
      mr: ["जखमी भाग स्थिर ठेवा.", "रुग्णालयात नेण्याची व्यवस्था करा.", "सापाचा फोटो काढा.", "श्वासावर लक्ष ठेवा."]
    },
    donts: {
      en: ["Do NOT cut the wound.", "Do NOT suck venom.", "Do NOT use tourniquet.", "Do NOT apply ice."],
      hi: ["कट न लगाएं।", "जहर न चूसें।", "कसाव (tourniquet) न बांधें।", "बर्फ न लगाएं।"],
      mr: ["कापू नका।", "विष काढू नका।", "घट्ट बांधू नका।", "बर्फ लावू नका।"]
    }
  },

  choking: {
    title: { en: "Choking", hi: "दम घुटना", mr: "दम कोंडणे" },
    image: require("../assets/images/choking.jpg"),
    audio: { en: require("../assets/audio/choking_english.wav"), hi: require("../assets/audio/choking_hindi.wav"), mr: require("../assets/audio/choking_marathi.wav") },
    steps: {
      en: [
        { id: 1, t: "Identify Choking", d: "Ask the person 'Are you choking?'. If they can cough, speak or breathe, do not interfere but encourage them to cough hard." },
        { id: 2, t: "Give 5 Back Blows", d: "Lean the person forward. Use the heel of your hand to give 5 sharp blows between the shoulder blades." },
        { id: 3, t: "Abdominal Thrusts", d: "Stand behind them, wrap arms around waist. Make a fist, place above navel, pull sharply inward and upward 5 times." },
        { id: 4, t: "Repeat the Cycle", d: "Continue alternating between 5 back blows and 5 abdominal thrusts until object is forced out." },
        { id: 5, t: "If Person Faints", d: "Lower them gently to floor. If they stop breathing, start CPR immediately. Call 108." },
        { id: 6, t: "Check the Mouth", d: "Look inside mouth. If object is visible and loose, remove it with fingers." }
      ],
      hi: [
        { id: 1, t: "स्थिति की पहचान", d: "व्यक्ति से पूछें 'क्या आपका दम घुट रहा है?' यदि वे खांस सकते हैं, तो उन्हें जोर से खांसने के लिए प्रोत्साहित करें।" },
        { id: 2, t: "पीठ पर 5 बार मारें", d: "व्यक्ति को थोड़ा आगे झुकाएं। अपनी हथेली के निचले हिस्से से कंधों के बीच 5 बार जोर से थपथपाएं।" },
        { id: 3, t: "पेट पर दबाव", d: "व्यक्ति के पीछे खड़े हों, अपनी बाहों को उनकी कमर के चारों ओर लपेटें। मुट्ठी बनाएं, नाभि के ऊपर रखें और 5 बार जोर से अंदर और ऊपर की ओर खींचें।" },
        { id: 4, t: "चक्र जारी रखें", d: "जब तक वस्तु बाहर न निकल जाए, तब तक 5 बार पीठ थपथपाने और 5 बार पेट दबाने की प्रक्रिया दोहराते रहें।" },
        { id: 5, t: "बेहोश होने पर", d: "यदि व्यक्ति बेहोश हो जाए, तो उन्हें धीरे से जमीन पर लेटाएं। यदि सांस रुक गई है, तो तुरंत CPR शुरू करें और 108 पर कॉल करें।" },
        { id: 6, t: "मुंह की जांच करें", d: "मुंह के अंदर देखें। यदि वस्तु दिख रही है, तो उसे उंगली से निकाल लें। अंधेरे में उंगली डालकर वस्तु खोजने की कोशिश न करें।" }
      ],
      mr: [
        { id: 1, t: "परिस्थिती ओळखा", d: "व्यक्तीला विचारा 'तुमचा श्वास कोंडतोय का?' जर ते खोकू शकत असतील तर त्यांना जोरात खोकण्यास सांगा." },
        { id: 2, t: "पाठीवर ५ फटके द्या", d: "व्यक्तीला पुढे झुकवा. हाताच्या तळव्याने खांद्यांच्या मधील भागावर ५ वेळा जोरात फटके द्या." },
        { id: 3, t: "पोटावर दाब", d: "व्यक्तीच्या मागे उभे राहा, कमरेभोवती हात गुंडाळा. एक मूठ तयार करा, नाभीच्या वर ठेवा आणि ५ वेळा जोरात आतून वरच्या दिशेला ओढा." },
        { id: 4, t: "चक्र पुन्हा करा", d: "जोपर्यंत वस्तू बाहेर येत नाही तोपर्यंत प्रक्रिया सुरू ठेवा." },
        { id: 5, t: "शुद्ध हरपल्यास", d: "व्यक्तीला हळूच जमिनीवर झोपवा. श्वास थांबल्यास त्वरित CPR सुरू करा आणि १०८ वर कॉल करा." },
        { id: 6, t: "तोंड तपासा", d: "तोंडाच्या आत पहा. वस्तू दिसत असल्यासच ती बाहेर काढा." }
      ]
    },
    dos: {
      en: ["Encourage forceful coughing.", "Stay calm and keep victim calm.", "Call 108 immediately if object isn't cleared.", "Lean person forward."],
      hi: ["जोर से खांसने के लिए प्रोत्साहित करें।", "स्वयं शांत रहें और मरीज को भी शांत रखें।", "यदि वस्तु बाहर न निकले तो तुरंत 108 पर कॉल करें।", "व्यक्ति को आगे की ओर झुकाकर रखें।"],
      mr: ["जोरात खोकण्यासाठी प्रोत्साहित करा.", "स्वतः शांत राहा आणि रुग्णाला धीर द्या.", "वस्तू बाहेर न आल्यास त्वरित १०८ वर कॉल करा.", "व्यक्तीला पुढे झुकवून ठेवा."]
    },
    donts: {
      en: ["Do NOT give water or food while choking.", "Do NOT perform blind finger sweeps.", "Do NOT slap back if coughing effectively.", "Do NOT panic."],
      hi: ["दम घुटते समय पानी या भोजन न दें।", "अंधाधुंध मुंह में उंगली न डालें।", "यदि व्यक्ति खांस रहा है तो पीठ पर न मारें।", "घबराएं नहीं।"],
      mr: ["श्वास कोंडलेला असताना पाणी किंवा अन्न देऊ नका.", "अंधाधुंध बोट घालून वस्तू शोधू नका.", "रुग्ण जोरात खोकत असेल तर पाठीवर मारू नका.", "घाबरू नका."]
    }
  },

  burns: {
    title: { en: "Burns", hi: "जल जाना", mr: "भाजणे" },
    image: require("../assets/images/burns.jpg"),
    audio: { en: require("../assets/audio/burns_english.wav"), hi: require("../assets/audio/burns_hindi.wav"), mr: require("../assets/audio/burns_marathi.wav") },
    steps: {
      en: [
        { id: 1, t: "Cool the Burn", d: "Put burnt area under cool running water for at least 20 minutes." },
        { id: 2, t: "Remove Constriction", d: "Gently remove rings, watches, jewelry before swelling starts." },
        { id: 3, t: "Loosely Cover", d: "Cover burn with sterile bandage or clean plastic wrap." },
        { id: 4, t: "Pain Management", d: "Keep person comfortable. Can give paracetamol for pain." },
        { id: 5, t: "Protect the Area", d: "If blisters appear, do not pop them." },
        { id: 6, t: "Medical Evaluation", d: "Seek help if burn is larger than palm or involves face/hands/feet." }
      ],
      hi: [
        { id: 1, t: "जलन को ठंडा करें", d: "जले हुए हिस्से को कम से कम 20 मिनट तक ठंडे बहते पानी के नीचे रखें।" },
        { id: 2, t: "तंग चीजें निकालें", d: "सूजन शुरू होने से पहले अंगूठी, घड़ी, गहने सावधानी से उतार दें।" },
        { id: 3, t: "ढीला ढकें", d: "घाव को साफ पट्टी या प्लास्टिक रैप से ढीला ढकें।" },
        { id: 4, t: "दर्द का प्रबंधन", d: "मरीज को शांत रखें। दर्द होने पर पैरासिटामोल दे सकते हैं।" },
        { id: 5, t: "छालों की सुरक्षा", d: "यदि छाले पड़ जाएं तो उन्हें कभी न फोड़ें।" },
        { id: 6, t: "डॉक्टर को दिखाएं", d: "यदि जला हुआ हिस्सा हथेली से बड़ा है तो अस्पताल जाएं।" }
      ],
      mr: [
        { id: 1, t: "जखम थंड करा", d: "भाजलेला भाग किमान २० मिनिटे वाहत्या थंड पाण्याखाली धरा." },
        { id: 2, t: "घट्ट वस्तू काढा", d: "सूज येण्यापूर्वी अंगठी, घड्याळ, दागिने काढून टाका." },
        { id: 3, t: "सैल झाकून ठेवा", d: "भाजलेला भाग स्वच्छ पट्टी किंवा प्लास्टिक रॅपने झाकून ठेवा." },
        { id: 4, t: "वेदना व्यवस्थापन", d: "रुग्णाला आराम द्या. वेदना असल्यास पॅरासिटामॉल देऊ शकता." },
        { id: 5, t: "फोडांची काळजी घ्या", d: "फोड फोडू नका." },
        { id: 6, t: "वैद्यकीय मदत", d: "भाजलेला भाग मोठा असल्यास डॉक्टरांकडे जा." }
      ]
    },
    dos: {
      en: ["Use cool running water immediately.", "Remove tight jewelry early.", "Cover with clean wrap.", "Reassure the victim."],
      hi: ["तुरंत बहते ठंडे पानी का प्रयोग करें।", "गहने और तंग चीजें जल्दी उतार दें।", "साफ रैप से ढकें।", "मरीज को दिलासा दें।"],
      mr: ["वाहत्या थंड पाण्याचा वापर करा.", "दागिने आणि घट्ट वस्तू काढून टाका.", "स्वच्छ रॅपने झाकून ठेवा.", "रुग्णाला धीर द्या."]
    },
    donts: {
      en: ["Do NOT apply ice directly.", "Do NOT use toothpaste, butter, or oil.", "Do NOT pop blisters.", "Do NOT remove stuck clothing."],
      hi: ["सीधे बर्फ न लगाएं।", "टूथपेस्ट, मक्खन या तेल न लगाएं।", "छालों को न फोड़ें।", "जले हुए हिस्से पर चिपके कपड़े न खींचें।"],
      mr: ["थेट बर्फ लावू नका.", "टूथपेस्ट, लोणी किंवा तेल लावू नका.", "फोड फोडू नका.", "भाजलेल्या भागाला चिकटलेले कपडे ओढून काढू नका."]
    }
  },

  heatstroke: {
    title: { en: "Heatstroke", hi: "लू लगना", mr: "उष्माघात" },
    image: require("../assets/images/heatstroke.jpg"),
    audio: { en: require("../assets/audio/Heatstroke_english.wav"), hi: require("../assets/audio/Heatstroke_hindi.wav"), mr: require("../assets/audio/Heatstroke_marathi.wav") },
    steps: {
      en: [
        { id: 1, t: "Move to Shade", d: "Quickly move person out of sun into a cool, shaded area." },
        { id: 2, t: "Cool the Body", d: "Apply cool, wet cloths to body. Focus on neck, armpits, groin." },
        { id: 3, t: "Improve Airflow", d: "Fan the person while skin is wet for faster cooling." },
        { id: 4, t: "Check Consciousness", d: "If conscious, give cool water or ORS in small sips." },
        { id: 5, t: "Lay them Down", d: "Keep person lying with feet slightly elevated." },
        { id: 6, t: "Emergency Transport", d: "If confused or unconscious, call 108 immediately." }
      ],
      hi: [
        { id: 1, t: "छाया में ले जाएं", d: "व्यक्ति को तुरंत धूप से हटाकर ठंडी, छायादार जगह पर ले जाएं।" },
        { id: 2, t: "शरीर को ठंडा करें", d: "शरीर पर गीले ठंडे कपड़े रखें। गर्दन, बगल और जांघों पर ध्यान दें।" },
        { id: 3, t: "हवा का प्रवाह बढ़ाएं", d: "गीले शरीर पर पंखे से हवा करें।" },
        { id: 4, t: "होश की जांच करें", d: "यदि होश में है तो ठंडा पानी या ORS पिलाएं।" },
        { id: 5, t: "लिटा कर रखें", d: "व्यक्ति को लेटा दें और पैर थोड़े ऊपर उठाएं।" },
        { id: 6, t: "अस्पताल ले जाएं", d: "यदि भ्रमित या बेहोश है तो तुरंत 108 पर कॉल करें।" }
      ],
      mr: [
        { id: 1, t: "सावलीत न्या", d: "व्यक्तीला त्वरित उन्हातून बाजूला करून थंड सावलीत न्या." },
        { id: 2, t: "शरीर थंड करा", d: "शरीरावर ओले थंड कापड ठेवा. मान, काख, जांघ या भागांवर लक्ष द्या." },
        { id: 3, t: "हवा द्या", d: "ओल्या शरीरावर पंख्याने हवा द्या." },
        { id: 4, t: "शुद्ध तपासा", d: "शुद्धीवर असल्यास थंड पाणी किंवा ORS द्या." },
        { id: 5, t: "झोपवून ठेवा", d: "व्यक्तीला झोपवून पाय थोडे उंचावून ठेवा." },
        { id: 6, t: "रुग्णालयात न्या", d: "गोंधळलेला किंवा बेशुद्ध असल्यास त्वरित १०८ वर कॉल करा." }
      ]
    },
    dos: {
      en: ["Move to cool environment.", "Loosen tight clothing.", "Apply wet cloths.", "Elevate feet."],
      hi: ["मरीज को ठंडे वातावरण में ले जाएं।", "तंग कपड़ों को ढीला करें।", "गीले कपड़े लगाएं।", "पैर ऊपर उठाएं।"],
      mr: ["थंड ठिकाणी हलवा.", "घट्ट कपडे सैल करा.", "ओले कापड लावा.", "पाय उंचावून ठेवा."]
    },
    donts: {
      en: ["Do NOT give alcohol or caffeine.", "Do NOT use extremely cold ice baths.", "Do NOT ignore high fever.", "Do NOT leave person alone."],
      hi: ["शराब या कैफीन न दें।", "बहुत ज्यादा बर्फीले पानी का उपयोग न करें।", "तेज बुखार को नजरअंदाज न करें।", "मरीज को अकेला न छोड़ें।"],
      mr: ["दारू किंवा कॅफिन देऊ नका.", "अतिशय थंड पाण्याचा वापर करू नका.", "ताप जास्त असल्यास दुर्लक्ष करू नका.", "रुग्णाला एकटे सोडू नका."]
    }
  },

  dog_bite: {
    title: { en: "Dog Bite", hi: "कुत्ते का काटना", mr: "कुत्रा चावणे" },
    image: require("../assets/images/dogbite.jpg"),
    audio: { en: require("../assets/audio/dogBite_english.wav"), hi: require("../assets/audio/dogBite_hindi.wav"), mr: require("../assets/audio/dogBite_marathi.wav") },
    steps: {
      en: [
        { id: 1, t: "Wash with Soap and Water", d: "Wash wound with soap and running water for at least 15 minutes." },
        { id: 2, t: "Control Bleeding", d: "Apply firm pressure with clean cloth until bleeding stops." },
        { id: 3, t: "Apply Antiseptic", d: "Apply Betadine or antibiotic cream after drying." },
        { id: 4, t: "Sterile Dressing", d: "Cover loosely with sterile bandage." },
        { id: 5, t: "Observe Animal", d: "Note if dog is stray or pet, any strange behavior." },
        { id: 6, t: "Immediate Medical Aid", d: "Go to hospital immediately for anti-rabies vaccine." }
      ],
      hi: [
        { id: 1, t: "साबुन और पानी से धोएं", d: "घाव को कम से कम 15 मिनट तक बहते पानी और साबुन से धोएं।" },
        { id: 2, t: "रक्तस्राव नियंत्रित करें", d: "साफ कपड़े से दबाव डालें जब तक खून न रुक जाए।" },
        { id: 3, t: "एंटीसेप्टिक लगाएं", d: "बीटाडीन या एंटीबायोटिक क्रीम लगाएं।" },
        { id: 4, t: "साफ पट्टी बांधें", d: "स्टेराइल पट्टी से ढीला ढकें।" },
        { id: 5, t: "जानवर पर नजर रखें", d: "कुत्ता आवारा है या पालतू, व्यवहार नोट करें।" },
        { id: 6, t: "तुरंत डॉक्टर के पास जाएं", d: "रेबीज वैक्सीन के लिए तुरंत अस्पताल जाएं।" }
      ],
      mr: [
        { id: 1, t: "साबण आणि पाण्याने धुवा", d: "जखम किमान १५ मिनिटे वाहत्या पाण्याखाली साबणाने धुवा." },
        { id: 2, t: "रक्तस्त्राव थांबवा", d: "स्वच्छ कापडाने दाब द्या रक्त थांबेपर्यंत." },
        { id: 3, t: "अँटीसेप्टिक लावा", d: "बीटाडिन किंवा अँटीबायोटिक क्रीम लावा." },
        { id: 4, t: "स्वच्छ पट्टी लावा", d: "स्टेराइल पट्टीने सैल झाकून ठेवा." },
        { id: 5, t: "प्राण्यावर लक्ष ठेवा", d: "कुत्रा भटका की पाळीव, वागण्यात बदल नोंदवा." },
        { id: 6, t: "त्वरित वैद्यकीय मदत", d: "रेबीज लसीसाठी त्वरित रुग्णालयात जा." }
      ]
    },
    dos: {
      en: ["Wash for full 15 minutes.", "Keep injured limb elevated.", "Complete full vaccination course.", "Report stray dog attacks."],
      hi: ["पूरे 15 मिनट धोएं।", "चोट वाला अंग ऊंचा रखें।", "वैक्सीन का पूरा कोर्स करें।", "आवारा कुत्ते के हमले की सूचना दें।"],
      mr: ["पूर्ण १५ मिनिटे धुवा.", "जखमी भाग उंचावून ठेवा.", "लसीकरणाचा पूर्ण कोर्स करा.", "भटक्या कुत्र्यांच्या हल्ल्याची माहिती द्या."]
    },
    donts: {
      en: ["Do NOT apply chili powder or mud.", "Do NOT use tight tourniquet.", "Do NOT ignore small scratches.", "Do NOT kill the dog."],
      hi: ["मिर्च या मिट्टी न लगाएं।", "घाव को कसकर न बांधें।", "छोटे खरोंच को नजरअंदाज न करें।", "कुत्ते को मारें नहीं।"],
      mr: ["मिरची किंवा माती लावू नका.", "जखम घट्ट बांधू नका.", "लहान ओरखड्याकडे दुर्लक्ष करू नका.", "कुत्र्याला मारू नका."]
    }
  },

//   eye_injury: {
  //     title: { en: "Eye Injury", hi: "आंख की चोट", mr: "डोळ्याला दुखापत" },
  //     image: require("../assets/images/eye.jpg"),
  //     audio: { en: require("../assets/audio/eye_english.wav"), hi: require("../assets/audio/eye_hindi.wav"), mr: require("../assets/audio/eye_marathi.wav") },
  //     steps: {
  //       en: [
  //         { id: 1, t: "Do Not Rub", d: "Do not rub or apply pressure to injured eye." },
  //         { id: 2, t: "Wash with Clean Water", d: "Gently flush eye with clean water for 15-20 minutes." },
  //         { id: 3, t: "Chemical Emergencies", d: "For chemicals, flush immediately with water, keep eye wide open." },
  //         { id: 4, t: "Embedded Objects", d: "Do NOT try to remove objects stuck in eye." },
  //         { id: 5, t: "Cover Both Eyes", d: "Cover injured eye with shield. Best to cover both eyes." },
  //         { id: 6, t: "Consult Specialist", d: "See eye specialist immediately if pain or vision changes." }
  //       ],
  //       hi: [
  //         { id: 1, t: "आंख न मलें", d: "चोट वाली आंख को न मलें और न ही दबाव डालें।" },
  //         { id: 2, t: "साफ पानी से धोएं", d: "आंख को 15-20 मिनट साफ पानी से धोएं।" },
  //         { id: 3, t: "केमिकल इमरजेंसी", d: "केमिकल गिरने पर तुरंत पानी से धोएं, आंख खुली रखें।" },
  //         { id: 4, t: "फंसी वस्तु", d: "आंख में फंसी वस्तु को निकालने की कोशिश न करें।" },
  //         { id: 5, t: "दोनों आंखें ढकें", d: "चोट वाली आंख पर ढाल लगाएं। दोनों आंखें ढकना बेहतर है।" },
  //         { id: 6, t: "विशेषज्ञ से मिलें", d: "दर्द या धुंधलापन होने पर तुरंत डॉक्टर से मिलें।" }
  //       ],
  //       mr: [
  //         { id: 1, t: "डोळा चोळू नका", d: "जखमी डोळ्याला चोळू नका किंवा दाब देऊ नका." },
  //         { id: 2, t: "स्वच्छ पाण्याने धुवा", d: "डोळा १५-२० मिनिटे स्वच्छ पाण्याने धुवा." },
  //         { id: 3, t: "केमिकल इमरजेंसी", d: "केमिकल गेल्यास त्वरित पाण्याने धुवा, डोळा उघडा ठेवा." },
  //         { id: 4, t: "रुतलेली वस्तू", d: "डोळ्यात रुतलेली वस्तू काढण्याचा प्रयत्न करू नका." },
  //         { id: 5, t: "दोन्ही डोळे झाका", d: "जखमी डोळ्यावर ढाल लावा. दोन्ही डोळे झाकणे उत्तम." },
  //         { id: 6, t: "तज्ज्ञांचा सल्ला घ्या", d: "वेदना किंवा अस्पष्ट दिसल्यास त्वरित डोळ्यांच्या डॉक्टरांना भेटा." }
  //       ]
  //     },
  //     dos: {
  //       en: ["Wash hands before touching eye.", "Use clean, boiled water to wash.", "Keep patient calm.", "Carry chemical container to doctor."],
  //       hi: ["आंख छूने से पहले हाथ धोएं।", "धोने के लिए साफ पानी का उपयोग करें।", "मरीज को शांत रखें।", "केमिकल का डिब्बा डॉक्टर को दिखाएं।"],
  //       mr: ["डोळ्याला स्पर्श करण्यापूर्वी हात धुवा.", "धुण्यासाठी स्वच्छ पाण्याचा वापर करा.", "रुग्णाला शांत ठेवा.", "केमिकलची बाटली डॉक्टरांना दाखवा."]
  //     },
  //     donts: {
  //       en: ["Do NOT rub eyes.", "Do NOT use tweezers or needles.", "Do NOT use cotton wool.", "Do NOT use eye drops without prescription."],
  //       hi: ["आंखें न मलें।", "चिमटी या सुई का प्रयोग न करें।", "रुई का प्रयोग न करें।", "बिना डॉक्टर की सलाह के आई-ड्रॉप न डालें।"],
  //       mr: ["डोळे चोळू नका.", "सुई किंवा चिमटा वापरू नका.", "कापूस वापरू नका.", "डॉक्टरांच्या सल्ल्याशिवाय औषध टाकू नका."]
  //     }
  //   },
  bleeding: {
    title: { en: "Severe Bleeding", hi: "गंभीर रक्तस्राव", mr: "तीव्र रक्तस्त्राव" },
    image: require("../assets/images/bleeding.jpg"),
    steps: {
      en: [
        { id: 1, t: "Safety First", d: "Put on gloves if available. Protect yourself first." },
        { id: 2, t: "Direct Pressure", d: "Apply firm pressure with clean cloth or bandage directly on wound." },
        { id: 3, t: "Add Layers", d: "If blood soaks through, add more cloth layers. Do NOT remove original." },
        { id: 4, t: "Elevate Limb", d: "Raise injured limb above heart level (if no broken bones)." },
        { id: 5, t: "Pressure on Artery", d: "If bleeding continues, apply pressure on the artery supplying the area." },
        { id: 6, t: "Call Emergency", d: "Call 108 immediately for severe bleeding." }
      ],
      hi: [
        { id: 1, t: "सुरक्षा", d: "यदि उपलब्ध हों तो ग्लव बेंस लगाएं। सुरक्षा सबसे पहले।" },
        { id: 2, t: "सीधा दबाव", d: "साफ कपड़े या बैंडेज से घाव पर सीधे दबाव डालें।" },
        { id: 3, t: "परत दबाव", d: "यदि खून भीग जाए तो और कपड़े डालें। मूल कपड़ा न उतारें।" },
        { id: 4, t: "ऊँचा करें", d: "घायल अंग को हृदय से ऊपर उठाएं (अगर हड्डी टूटी न हो)।" },
        { id: 5, t: "आर्टरी पर दबाव", d: "यदि रक्तस्राव जारी है तो आर्टरी पर दबाव डालें।" },
        { id: 6, t: "आपातकाल बुलाएं", d: "गंभीर रक्तस्राव के लिए तुरंत 108 बुलाएं।" }
      ],
      mr: [
        { id: 1, t: "सुरक्षा", d: "उपलब्ध असल्यास ग्लव बेंस लावा. सुरक्षा प्रथम." },
        { id: 2, t: "थेट दाब", d: "स्वच्छ कापड वा बॅन्डेजने घावावर थेट दाब टाका." },
        { id: 3, t: "अति दाब", d: "रक्त भिजेल तर अधिक कापडे ठेवा. मूळ कापड न वालू." },
        { id: 4, t: "उंचावा", d: "जखमी अवयव हृदयापेक्षा वर ठेवा (हाड टूटा नसल्यास)." },
        { id: 5, t: "आर्टेरी वर दाब", d: "रक्तस्त्राव वाढल्यास आर्टेरीवर दाब टाका." },
        { id: 6, t: "रुग्णाला आणा", d: "तीव्र रक्तस्त्राव असल्यास त्वरित १०८ वर कॉल करा." }
      ]
    },
    dos: {
      en: ["Use sterile gauze or clean cloth", "Keep the person lying down", "Reassure and keep warm"],
      hi: ["स्टीरल गौज या साफ कपड़े का उपयोग करें", "व्यक्ति को लेटा रखें", "मरीज को आश्वासन दें और गर्म रखें"],
      mr: ["स्टीरल गॉज किंवा स्वच्छ कापड वापरा", "व्यक्तीला झोपवून ठेवा", "रुग्णाला धीर द्या आणि गरम ठेवा"]
    },
    donts: {
      en: ["Remove cloth stuck to wound", "Apply tourniquet unless trained", "Remove embedded objects"],
      hi: ["घाव पर चिपके कपड़े न उतारें", "प्रशिक्षण न होने तक टूर्निक्वेट न लगाएं", "समेटे वस्तु न उतारें"],
      mr: ["जखमी भागावर चिकटले कापड ओढू नका", "प्रशिक्षण न होल्यावर टोर्निक्वेट घालू नका", "रुतले वस्तू काढू नका"]
    }
  },

  shock: {
    title: { en: "Electric Shock", hi: "बिजली का झटका", mr: "विजेचा धक्का" },
    image: require("../assets/images/heatstroke.jpg"), // Using heatstroke as fallback image
    steps: {
      en: [
        { id: 1, t: "Turn Off Power", d: "Disconnect the power source immediately. Do NOT touch the person with bare hands." },
        { id: 2, t: "Assess Consciousness", d: "Check if the person is responsive. If not, call 108 immediately." },
        { id: 3, t: "Check Breathing", d: "If not breathing, begin CPR." },
        { id: 4, t: "Treat Burns", d: "Treat any burn injuries following the burn first aid protocol." },
        { id: 5, t: "Keep Warm", d: "Keep the person lying down with legs elevated (if no leg injury)." },
        { id: 6, t: "Monitor Vital Signs", d: "Watch for pulse and breathing until help arrives." }
      ],
      hi: [
        { id: 1, t: "बिजली बंद करें", d: "तुरंत बिजली के स्रोत को डिस्कनेक्ट करें।" },
        { id: 2, t: "होश जाँचें", d: "व्यक्ति को जाँचें कि क्या वह जवाबदेह है।" },
        { id: 3, t: "सांस पहचानें", d: "यदि व्यक्ति सांस न ले रहा है तो CPR शुरू करें।" },
        { id: 4, t: "जलन उपचार", d: "जलन के उपचार के लिए बर्न्स प्रोटोकॉल का पालन करें।" },
        { id: 5, t: "गर्म रखें", d: "व्यक्ति को लेटा हुए रखें।" },
        { id: 6, t: "विटाल साइन्स", d: "सहायता आने तक पल्स और सांस पर नजर रखें।" }
      ],
      mr: [
        { id: 1, t: "वीज बंद करा", d: "त्वरित वीजाचा स्रोत अपाट करा. रुग्णाला स्वच्छ हाताने छापू नका." },
        { id: 2, t: "चाकू तपासा", d: "रुग्ण जवाबदेह आहे का ते पाहा." },
        { id: 3, t: "श्वास तपासा", d: "जर श्वास घेत नाही तर CPR सुरू करा." },
        { id: 4, t: "भाजणे उपचार", d: "लाडणींच्या प्रथमचार प्रोटोकॉलवर भाजण्यावर उपचार केले." },
        { id: 5, t: "गरम ठेवा", d: "रुग्णाला झोपवून पाय उंचावून ठेवा." },
        { id: 6, t: "पल्स मॉनिटर करा", d: "मदत येण्यावर श्वासावर नजर ठेवा." }
      ]
    },
    dos: {
      en: ["Turn off electricity at source", "Call for emergency help", "Treat burns gently", "Keep person comfortable"],
      hi: ["बिजली के स्रोत को बंद करें", "आपातकालीन सहायता के लिए बुलाएं", "जलन का सौंदर्यपूर्ण उपचार करें"],
      mr: ["वीजाचा स्रोत बंद करा", "आपत्कालीन मदतीसाठी बुलाएं", "लाडणींचा सुंदर उपचार करा"]
    },
    donts: {
      en: ["Do NOT touch person with bare hands if still connected to power", "Do NOT move person unless in immediate danger", "Do NOT give anything by mouth"],
      hi: ["यदि यह अभी भी बिजली से जुडा हुआ है तो व्यक्ति को स्पर्श न करें"],
      mr: ["जर वीजेशिवाय जुडलेला असेल तर रुग्णाला स्पर्श करू नका"]
    }
  }
  ,
  cpr: {
    title: {
      en: "CPR – Cardiopulmonary Resuscitation",
      hi: "सीपीआर – कार्डियोपल्मोनरी रिससिटेशन",
      mr: "सीपीआर – कार्डियोपल्मोनरी रिससिटेशन"
    },
    description: {
      en: "Person is unconscious and NOT breathing. Start CPR immediately.",
      hi: "व्यक्ति बेहोश है और सांस नहीं ले रही है। तुरंत सीपीआर शुरू करें।",
      mr: "व्यक्ती बेशुद्ध आहे आणि श्वास घेत नाही. त्वरित सीपीआर सुरू करा."
    },
    steps: {
      en: [
        { id: 1, t: "Check Responsiveness", d: "Tap and shout – 'Are you okay?' If no response, call 108." },
        { id: 2, t: "Open Airway", d: "Tilt head back and lift chin." },
        { id: 3, t: "Check Breathing", d: "Look, listen, feel for normal breathing for 10 seconds." },
        { id: 4, t: "Start Compressions", d: "Place heel of one hand on center of chest. Push hard and fast (100–120/min)." },
        { id: 5, t: "Give Rescue Breaths", d: "After 30 compressions, give 2 breaths. Pinch nose, make a seal, blow for 1 second." },
        { id: 6, t: "Continue CPR", d: "Repeat cycles of 30 compressions and 2 breaths until help arrives." }
      ],
      hi: [
        { id: 1, t: "प्रतिक्रिया जांचें", d: "टैप करें और चिल्लाएं – 'क्या आप ठीक हैं?' कोई जवाब न हो तो 108 पर कॉल करें।" },
        { id: 2, t: "वायुमार्ग खोलें", d: "सिर पीछे झुकाएं और ठोड़ी उठाएं।" },
        { id: 3, t: "सांस की जाँच करें", d: "10 सेकंड तक सामान्य सांस देखें, सुनें, महसूस करें।" },
        { id: 4, t: "कंप्रेशन शुरू करें", d: "एक हाथ की एड़ी छाती के केंद्र पर रखें। जोर से और तेजी से दबाएं (100–120/मिनट)।" },
        { id: 5, t: "रेस्क्यू ब्रीथ दें", d: "30 कंप्रेशन के बाद, 2 सांसें दें। नाक बंद करें, मुंह से मुंह लगाएं, 1 सेकंड फूंकें।" },
        { id: 6, t: "सीपीआर जारी रखें", d: "30 कंप्रेशन और 2 सांसों के चक्र दोहराएं जब तक मदद न आ जाए।" }
      ],
      mr: [
        { id: 1, t: "प्रतिसाद तपासा", d: "टॅप करा व विचारा – 'तू ठीक आहेस का?' उत्तर न आल्यास १०८ वर कॉल करा." },
        { id: 2, t: "वायुमार्ग उघडा", d: "डोके मागे झुकवा व हनुवटी वर करा." },
        { id: 3, t: "श्वास तपासा", d: "१० सेकंद सामान्य श्वास पहा, ऐका, अनुभवा." },
        { id: 4, t: "कंप्रेशन सुरू करा", d: "छातीच्या मध्यभागी हाताची टाच ठेवा. जोरात व जलद दाबा (१००–१२०/मिनिट)." },
        { id: 5, t: "कृत्रिम श्वास द्या", d: "३० कंप्रेशननंतर २ श्वास द्या. नाक चिमटा, तोंडाने हवा फुंकर घाला." },
        { id: 6, t: "सीपीआर सुरू ठेवा", d: "३० कंप्रेशन आणि २ श्वास यांचे चक्र मदत येईपर्यंत पुन्हा करा." }
      ]
    },
    dos: {
      en: ["Keep the person on a firm, flat surface.", "Allow chest to fully recoil between compressions.", "Continue until professional help arrives or person moves.", "Use a metronome to keep the right pace."],
      hi: ["व्यक्ति को सख्त, सपाट सतह पर रखें।", "दबाने के बीच छाती को पूरी तरह से ऊपर आने दें।", "पेशेवर मदद आने तक या व्यक्ति हिलने तक जारी रखें।", "सही गति बनाए रखने के लिए मेट्रोनोम का उपयोग करें।"],
      mr: ["व्यक्तीला घट्ट, सपाट पृष्ठभागावर ठेवा.", "दाबाच्या दरम्यान छाती पूर्णपणे वर येऊ द्या.", "व्यावसायिक मदत येईपर्यंत किंवा व्यक्ती हलत नाही तोपर्यंत सुरू ठेवा.", "योग्य गतीसाठी मेट्रोनोम वापरा."]
    },
    donts: {
      en: ["Do NOT bend the elbows during compressions.", "Do NOT lean on the chest after each push.", "Do NOT stop unless exhausted or help arrives.", "Do NOT give breaths without checking the airway first."],
      hi: ["दबाते समय कोहनी न मोड़ें।", "प्रत्येक दबाने के बाद छाती पर न झुकें।", "तब तक न रुकें जब तक थक न जाएं या मदद न आ जाए।", "वायुमार्ग की जांच किए बिना सांस न दें।"],
      mr: ["दाबताना कोपर वाकवू नका.", "प्रत्येक दाबानंतर छातीवर झुकू नका.", "थकल्याशिवाय किंवा मदत येईपर्यंत थांबू नका.", "वायुमार्ग तपासल्याशिवाय श्वास देऊ नका."]
    }
  },
};