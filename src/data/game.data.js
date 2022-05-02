const GAME_LIST = [
    {
        id:1,
        name:'SIFU',
        price:539,
        wallpaper:'https://cdn.discordapp.com/attachments/901805974459928608/950647775589199923/egs-sifustandardedition-sloclap-g2-00-1920x1080-edb885b62a36.png',
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950647775589199923/egs-sifustandardedition-sloclap-g2-00-1920x1080-edb885b62a36.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950642695515303936/egs-sifustandardedition-sloclap-g1c-00-1920x1080-03d1e653ea90.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950642816588083230/egs-sifustandardedition-sloclap-g1a-06-1920x1080-b45863e5563b.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950642852935917578/sifu-cover.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950642883470446592/xlarge.png'
        ],
        desc:'Sifu is the new game of Sloclap, the independent studio behind Absolver. A third person action game featuring intense hand-to-hand combat, it puts you in control of a young Kung-Fu student on a path of revenge.',
        stock:999,
        newGame:true,
        bestSell:false,
        type:['PC', 'PS'],
        discount:0.06
    },
    {
        id:2 ,
        name:'God Of War',
        price:1290,
        wallpaper:'https://cdn.discordapp.com/attachments/901805974459928608/950647650053685308/275-2754848_kratos-atreus-god-of-war-wallpapers-download-free.png',
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950643544115269702/header.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950643439891005480/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950643578764394536/ss_6eccc970b5de2943546d93d319be1b5c0618f21b.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950643602378338314/ss_f1bff24d3967a21d303d95e11ed892e3d9113057.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950643620728426576/ss_3670ba72c7e3e9c3c3225547ef2c1053504e62b8.png'
        ],
        desc:'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.',
        stock:999,
        newGame:true,
        bestSell:true,
        type:['PC' , 'PS'],
        discount:0.2
    },
    {
        id:3,
        name:'Horizon Forbidden West',
        price:1990,
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950643904338874398/564000008935001.png',
        wallpaper:'https://cdn.discordapp.com/attachments/901805974459928608/950683621226868746/horizon-forbidden-west-desktop-02-wallpaper-04-en-18jun20.jpg',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950643755847938048/HO8vkO9pfXhwbHi5WHECQJdN.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950643978469015592/horizon_forbidden_west_new_story_trailer_5.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950644068029968444/e0b8a7e0b8b4e0b898e0b8b5e0b982e0b8abe0b8a5e0b894-horizon-forbidden-west-e0b8a5e0b988e0b8a7e0b887e0b8abe0b899e0b989e0b8b2-e0b882e0b899e0b8b2.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950644157196668948/Horizon-Forbidden-West-2.png'
        ],
        desc:'Join Aloy as she braves the Forbidden West, a deadly frontier that conceals mysterious new threats.',
        stock:999,
        newGame:true,
        bestSell:false,
        type:['PS'],
        discount:0.05
    },
    {
        id:4,
        name:'Dyling Light 2 Stay Human',
        price:1899,
        wallpaper:'https://cdn.discordapp.com/attachments/901805974459928608/950683945408790548/dying-light-2-uhdpaper.com-8K-12.jpg',
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950644505156141056/header.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950644483601616927/VX847NXwmdvep7yQWeBez8oQ.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950644539083874324/ss_0ecb51b7f46b67ea48d0615124d9e134d7098cf8.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950644562219638794/ss_6f01caca9af07032a22f16712f180c7e7ab0a1a3.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950644599280508948/ss_52e3cef35d9b57bac517b6f26439769cc7156215.png'
        ],
        desc:'Over twenty years ago in Harran, we fought the virus—and lost. Now, we’re losing again. The City, one of the last large human settlements, is torn by conflict. Civilization has fallen back into the Dark Ages. And yet, we still have hope.',
        stock:999,
        newGame:true,
        bestSell:false,
        type:['PC' , 'XBOX' , 'PS'],
        discount:0
    },
    {
        id:5,
        name:'Elden Ring',
        price:1490,
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950645008174821406/header.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950644986561572954/phvVT0qZfcRms5qDAk0SI3CM.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950645042144485376/ss_e80a907c2c43337e53316c71555c3c3035a1343e.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950645063447347260/ss_25cd489871907387c1b915022a96b196661b6e17.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950645121777532928/ss_8b58d96262fb0d62a482621b86c6ff85f4f57997.png'
        ],
        desc:'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
        stock:999,
        newGame:true,
        bestSell:true,
        type:['PC' , 'XBOX' , 'PS'],
        discount:0
    },
    {
        id:6,
        name:'Monster Hunter Rise',
        price:1829,
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950645546538917908/header.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950645521826062356/wallpaper_rise_1080_1920.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950645571281117214/ss_f8249da14987e3c2d10fd4024736f28774c713da.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950645588809097236/ss_25686086b61ca88a859bc20d588682be92ab4d63.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950645636842274827/ss_d8d96313f1049c800d37a3fc521f06f926fca3ac.png'
        ],
        desc:'Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you’ll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline.',
        stock:999,
        newGame:false,
        bestSell:true,
        type:['PC'],
        discount:0.06
    },
    {
        id:7,
        name:'Guardians of the Galaxy',
        price:1990,
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950646315442925588/header.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950646276884660244/Pw9cWnyqkix3EoCOGqrN1cgN.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950646353262944286/ss_762e9aa91609ac1ef1f20c7dd1a2de2b32060234.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950646374473531452/ss_815ef8c726e21a388d8ca331c2609c2d46ceeb32.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950646591314870292/ss_31f2ca046af6f0c5ee896b421394b415f21ce3d6.png'
        ],
        desc:'Fire up a wild ride across the cosmos with a fresh take on Marvel’s Guardians of the Galaxy. In this third-person action-adventure game, you are Star-Lord, and thanks to your bold yet questionable leadership, you have persuaded an oddball crew of unlikely heroes to join you. Some jerk (surely not you) has set off a chain of catastrophic events, and only you can hold the unpredictable Guardians together long enough to fight off total interplanetary meltdown. Use Element Blasters, tag-team beat downs, jet boot-powered dropkicks, nothing’s off-limits.',
        stock:999,
        newGame:false,
        bestSell:false,
        type:['PC' , 'XBOX' , 'PS'],
        discount:0
    },
    {
        id:8,
        name:'HALO Infinite (Campaign)',
        price:1899,
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950646841979047996/capsule_616x353.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950646798953889853/Halo_Infinite.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950646899105484860/026df8fabfa5762a668a1dcee61187f7.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950647009256280064/Halo-Infinite-Ascension-Demo-Campaign.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950647077019471902/master-chief-halo-infinite.png'
        ],
        desc:'When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced.',
        stock:999,
        newGame:false,
        bestSell:false,
        type:['PC' , 'XBOX'],
        discount:0
    },
    {
        id:9,
        name:'RESIDENT EVIL VILLAGE',
        price:1829,
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950647358134304808/header.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950647319605432370/FkzwjnJknkrFlozkTdeQBMub.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950647393739747368/ss_d25704b01be292d1337df4fea0fba2aab322b58a.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950647420923039744/ss_50283e6df9d2f3f24ff4a1a36a94ae307e21cee8.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950647441378648104/ss_363d9c05ee0a974b766938610a3352e7a89b9c92.png'
        ],
        desc:'Set a few years after the horrifying events in the critically acclaimed Resident Evil 7 biohazard, the all-new storyline begins with Ethan Winters and his wife Mia living peacefully in a new location, free from their past nightmares. Just as they are building their new life together, tragedy befalls them once again.',
        stock:999,
        newGame:false,
        bestSell:false,
        type:['PC' , 'PS' , 'XBOX'],
        discount:0
    },
    {
        id:10,
        name:'FARCRY 6',
        price:1600,
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950648019991298068/ubisoft-far-cry-6-banner1.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950647942920945714/TETRA_PREORDER_STANDARD20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950648145904271410/far-cry-6-screenshot-7.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950648304860020826/Games-Far-Cry-6-TOP.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950648509869207592/far-cry-6-screenshot-b.png'
        ],
        desc:'สวมบทบาทเป็นดานี่ โรฮาส (Dani Rojas) คนท้องถิ่นชาวยาราในขณะที่คุณต่อสู้เคียงข้างกับการปฏิวัติกองโจรแห่งยุคปัจจุบันเพื่อปลดแอกยารา! ต่อสู้กับระบอบการปกครองของคาสติลโญใน Far Cry® ที่ขยายตัวมากที่สุดจนถึงปัจจุบัน!',
        stock:999,
        newGame:false,
        bestSell:true,
        type:['PC' , 'PS' , 'XBOX'],
        discount:0.3
    },
    {
        id:11,
        name:'Little Nightmares II',
        price:699,
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950648751184306216/header.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950648737775124530/ab08c4eafd957fc08f4dd1fd36ded6af.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950648772621369415/ss_b7bdc32338c0261ee0773ad0b13024c853a2141c.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950648796394704947/ss_a17e682e91c93695f2855be46428c4fc04c997f3.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950648831790420018/ss_cf35b2752cf954a0a073552f665b88e4e043d55d.png'
        ],
        desc:'Return to a world of charming horror in Little Nightmares II, a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by the humming transmission of a distant tower.',
        stock:999,
        newGame:false,
        bestSell:false,
        type:['PC' , 'PS' , 'XBOX'],
        discount:0.1
    },
    {
        id:12,
        name:'DEATHLOOP',
        price:1970,
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950649204483710996/EGS_DEATHLOOP_ArkaneStudios_S1_2560x1440-bf6d342edbd2411ccf24e326852fca93.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950649138909945866/768af798a7ee31757ba74492c91a5afa.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950649261064871976/deathloop_11.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950649289552576582/deathloop_08.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950649330488975390/large.png'
        ],
        desc:'DEATHLOOP is a next-gen first person shooter from Arkane Lyon, the award-winning studio behind Dishonored.',
        stock:999,
        newGame:false,
        bestSell:false,
        type:['PC' ,'PS'],
        discount:0
    },
    {
        id:13,
        name:'It Takes Two',
        price:1099,
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950649713949048872/t620x300-5c0d354cba56d8b7ea75b091368902f9.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950649621842120734/it-takes-two-pc-game-origin-cover.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950649785638060062/takestwo_06.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950649905599377468/it-takes-two-screenshots-and-art_7axq.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950650033810858044/screenshot.png'
        ],
        desc:'Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op. ',
        stock:999,
        newGame:false,
        bestSell:false,
        type:['PC' , 'PS' , 'XBOX'],
        discount:0
    },
    {
        id:14,
        name:'Back 4 Blood',
        price:1590,
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950650405602332712/header.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950650359158816788/EGS_Back4Blood_TurtleRockStudios_S2-1200x1600-0cd4ac84bb5491a81aa6ebfcbea9dfbf.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950650449260863498/ss_3329126d46bfd0cd32069508a1d37e40a1f4d92e.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950650477354291230/ss_61ba5c1e5ff0992738255a3c6679fdbc2cd659de.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950650495742132224/ss_cb8d4bd7139ce8f80df16e5c7c4be906222f050b.png'
        ],
        desc:'Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise. You are at the center of a war against the Ridden.',
        stock:999,
        newGame:false,
        bestSell:false,
        type:['PC' , 'PS' , 'XBOX'],
        discount:0
    },
    {
        id:15,
        name:'Kena: Bridge of Spirits',
        price:552,
        banner:'https://cdn.discordapp.com/attachments/901805974459928608/950650687052726342/433859359.png',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950650619365036032/kQzDCY5RCrSXCeeFjPGUzkGI.png',
        images:[
            'https://cdn.discordapp.com/attachments/901805974459928608/950650973515292682/kena_delay_september_2021_13.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950651052619890739/4540156.png',
            'https://cdn.discordapp.com/attachments/901805974459928608/950651156307251210/kenabos_02.png'
        ],
        desc:'Kena, a young Spirit Guide, travels to an abandoned village in search of the sacred mountain shrine.  She struggles to uncover the secrets of this forgotten community hidden in an overgrown forest where wandering spirits are trapped.',
        stock:999,
        newGame:false,
        bestSell:true,
        type:['PC' , 'PS'],
        discount:0
    },
    {
        id:16,
        name:'หูฟังป้องกันเสียงรบกวนแบบไร้สาย WH-XB900N',
        price:7990,
        banner:'',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950655613048868904/8f499d4640b363762e66edd1a4916a10_1024x1024.png',
        images:[
            ''
        ],
        desc:'พบกับหูฟังตัดเสียงรบกวนไร้สายเหล่านี้ที่มีสมาร์ทฟังค์ชั่นมากมาย เช่น การควบคุมระบบสัมผัสที่ใช้งานง่าย, Quick Attention สำหรับการสนทนาได้ง่ายดาย และระยะเวลาการใช้งานแบตเตอรี่ที่ยาวนาน ทั้งหมดนี้รวมอยู่ในสมาร์ทดีไซน์ที่ออกแบบมาสำหรับการฟังได้ตลอดวันพร้อมเสียงที่ทุ้มลึกหนักแน่น',
        stock:999,
        newGame:false,
        bestSell:false,
        type:['Accessories'],
        discount:0
    },
    {
        id:17,
        name:'DualSense™ Wireless Controller',
        price:2290,
        banner:'',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950651791073214464/Default_Front.png',
        images:[
            ''
        ],
        desc:'The DualSense wireless controller for PS5 offers immersive haptic feedback2, dynamic adaptive triggers2 and a built-in microphone, all integrated into an iconic design.',
        stock:999,
        newGame:false,
        bestSell:false,
        type:['Accessories'],
        discount:0
    },
    {
        id:18,
        name:'Sony DualSense Charging Station',
        price:1090,
        banner:'',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950654991062949928/PS5DSDOCKW.png',
        images:[
            ''
        ],
        desc:'แท่นชาร์จ DualSense ทำให้คุณอยู่ในเกมและพร้อมรับมือกับเพื่อนๆ เกมเมอร์ของคุณเสมอและยังเชื่อมต่อคอนโทรลเลอร์ไร้สาย Du alSense ได้สูงสุดสองตัว อย่างรวดเร็วและง่ายดายด้วยแท่นชาร์จแบบคลิกอิน เหมือนเชื่อมต่ออยู่กับคอนโซล PS5 คุณจึงได้พอร์ต USB ว่างเพิ่มโดยไม่สูญเสียประสิทธิภาพในการชาร์จจึงทำให้คอนโทรลเลอร์ของคุณจะถูกชาร์จไฟอย่างรวดเร็วและง่ายดาย คุณสามารถชาร์ตไฟทิ้งไว้ได้ตามความสะดวก',
        stock:999,
        newGame:false,
        bestSell:false,
        type:['Accessories'],
        discount:0
    },
    {
        id:19,
        name:'Oculus Rift S PC-Powered VR Gaming',
        price:21900,
        banner:'',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950654401440280616/WHK6h_IrGGAmi0sF35O_9A5ribsZkXxn8fMQb2gk_g-f1BWRdbOj1ttjRQIuLEmuWm7GD1EKjzQyyWCBEBN2dkkLbQsMDs_KpviaRnnrfKuDiJJOjFCsZdI5FgnYsFFMd74ZjJIU.png',
        images:[
            ''
        ],
        desc:'Oculus Rift S ยังคงเป็น Hi-end VR Headset จากค่าย Oculus ที่ต้องเชื่อมต่อกับ Computer ผ่าน Display Port และ USB 3.0 สิ่งที่ต่างจาก Rift ตัวแรก (CV1) คือ ตัวขาแว่นหรืออุปกรณ์ส่วมใสพัฒนาขึ้นทำให้ปรับความสบายในการใส่ได้ง่ายขึ้น หน้าจอความละเอียดสูงขึ้นจาก (1080x1200)x2 เป็น (1280x1440)x2 เปลี่ยน Display ซึ่งจะทำให้มองเห็นรายละเอียด(Texture) ภายใน',
        stock:999,
        newGame:false,
        bestSell:false,
        type:['Accessories'],
        discount:0
    },
    {
        id:20,
        name:'Microsoft XBOX Series X Wireless Controller',
        price:1990,
        banner:'',
        poster:'https://cdn.discordapp.com/attachments/901805974459928608/950652217826902036/xbox-series-x-controller-transparent-render.png',
        images:[
            ''
        ],
        desc:'จอย Xbox Wireless Controller เพิ่มประสบการณ์ในการเล่นเกมส์ที่สะดวกสบายมากขึ้น ด้วยรูปลักษณ์การออกแบบที่สวยงาม เรียบหรู โค้งมน จับกระชับมือ ผู้เล่นสามารถเพลิดเพลินกับการ Mapping ปุ่มสามารถทำได้ผ่าน Xbox Accessories App',
        stock:999,
        newGame:false,
        bestSell:false,
        type:['Accessories'],
        discount:0
    },
]

export default GAME_LIST;