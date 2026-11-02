export interface Project {
  id: string;
  year: string;
  yearNum: number;
  title: string;
  thaiTitle: string;
  category: 'medical' | 'circuits' | 'training' | 'materials';
  categoryLabel: string;
  tagline: string;
  descriptions: string[];
  highlights: string[];
  tags: string[];
  featured?: boolean;
}

export interface Activity {
  id: string;
  year: string;
  title: string;
  role: string;
  description: string;
  category: 'volunteer' | 'sports' | 'teaching' | 'music' | 'academic';
  badge: string;
}

export const personalInfo = {
  name: "Panuwit Anananusit",
  thaiName: "ภาณุวิทย์ อนันอนุสิทธิ์",
  nickname: "Fluke (ฟลุ๊ค)",
  age: 21,
  university: "King Mongkut’s University of Technology Thonburi (KMUTT)",
  thaiUniversity: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)",
  faculty: "Faculty of Science",
  thaiFaculty: "คณะวิทยาศาสตร์",
  department: "Department of Physics",
  thaiDepartment: "ภาควิชาฟิสิกส์",
  major: "Physics Materials and Medical Instrumentation",
  thaiMajor: "สาขาวิชาฟิสิกส์วัสดุและเครื่องมือทางการแพทย์",
  yearLevel: "3rd-Year Undergraduate Student",
  thaiYearLevel: "นักศึกษาชั้นปีที่ 3",
  email: "flukpanuwit1412@gmail.com",
  phone: "095-481-1903",
  lineId: "fluk141248",
  instagram: "panuwitfluk",
  location: "Bangkok, Thailand",
  profileImage: "/profile.jpg",
  originalPortfolioImage: "/portfolio-original.png",
  originalPortfolioPdf: "/portfolio-original.pdf",
  bio: "Hi! My name is Panuwit Anananusit (Fluke). I am 21 years old and currently a third-year student at KMUTT, majoring in Physics Materials and Medical Instrumentation. Passionate about medical equipment innovation, biomedical sensor design, electronic circuit development, and advanced thin film vacuum technologies.",
  thaiBio: "สวัสดีครับ ผมชื่อ ภาณุวิทย์ อนันอนุสิทธิ์ (ฟลุ๊ค) อายุ 21 ปี ปัจจุบันกำลังศึกษาอยู่ชั้นปีที่ 3 ภาควิชาฟิสิกส์ สาขาวิชาฟิสิกส์วัสดุและเครื่องมือทางการแพทย์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี มีความสนใจและมุ่งมั่นในการเรียนรู้ด้านเครื่องมือทางการแพทย์ การออกแบบวงจรอิเล็กทรอนิกส์และเซนเซอร์ ตลอดจนเทคโนโลยีฟิล์มบางและระบบสุญญากาศขั้นสูง"
};

export const technicalSkillGroups = [
  {
    group: "Electronics & Embedded Systems",
    thaiGroup: "อิเล็กทรอนิกส์และสมองกลฝังตัว",
    icon: "Cpu",
    skills: [
      { name: "Basic Electronic Circuit Design", desc: "การออกแบบวงจรอิเล็กทรอนิกส์เบื้องต้น" },
      { name: "Arduino-Based System Development", desc: "การพัฒนาระบบควบคุมด้วยบอร์ด Arduino" },
      { name: "Sensor Applications & Interfacing", desc: "การประยุกต์ใช้งานเซนเซอร์ตรวจวัดทางกายภาพ" },
      { name: "Signal Conditioning & Op-Amps", desc: "วงจรขยายและกรองสัญญาณอนาล็อก" },
      { name: "System Design and Planning", desc: "การวางแผนและออกแบบผังการทำงานของระบบ" },
    ]
  },
  {
    group: "Medical Instrumentation",
    thaiGroup: "เครื่องมือและอุปกรณ์ทางการแพทย์",
    icon: "HeartPulse",
    skills: [
      { name: "Medical Instrumentation Principles", desc: "หลักการทำงานและการวัดค่าของเครื่องมือแพทย์" },
      { name: "Medical Equipment Preventive Maintenance (PM)", desc: "การตรวจสอบและบำรุงรักษาเชิงป้องกันเครื่องมือแพทย์" },
      { name: "Optical Pulse & Blood Oxygen Sensing (SpO2)", desc: "ระบบตรวจจับสัญญาณชีพจรและการดูดกลืนแสง" },
      { name: "Clinical Safety & Equipment Reliability", desc: "ความปลอดภัยของอุปกรณ์ทางการแพทย์ในสถานพยาบาล" },
    ]
  },
  {
    group: "Physics & Materials Science",
    thaiGroup: "ฟิสิกส์วัสดุและเทคโนโลยีสุญญากาศ",
    icon: "Layers",
    skills: [
      { name: "Fundamental Materials Science", desc: "วัสดุศาสตร์พื้นฐานและสมบัติทางกายภาพ" },
      { name: "Vacuum Technology", desc: "เทคโนโลยีระบบสุญญากาศระดับสูง" },
      { name: "Thin Film Technology", desc: "เทคโนโลยีและการสังเคราะห์ฟิล์มบาง" },
      { name: "Sputtering Technology", desc: "การเคลือบฟิล์มบางด้วยเทคนิคสปัตเตอริ่ง" },
      { name: "Experimental Design & Analysis", desc: "การออกแบบการทดลองและการเก็บข้อมูลเชิงวิทยาศาสตร์" },
    ]
  }
];

export const softSkills = [
  { name: "Communication Skills", thai: "ทักษะการสื่อสารที่ชัดเจนและมีประสิทธิภาพ", icon: "MessageSquare" },
  { name: "Coordination Skills", thai: "ทักษะการประสานงานและบริหารจัดการงาน", icon: "GitMerge" },
  { name: "Presentation Skills", thai: "ทักษะการนำเสนอผลงานและข้อมูลทางวิชาการ", icon: "Presentation" },
  { name: "Active Listening", thai: "การรับฟังอย่างใส่ใจและเข้าใจบริบท", icon: "Ear" },
  { name: "Organizational Skills", thai: "การวางแผนจัดลำดับความสำคัญอย่างเป็นระบบ", icon: "CheckSquare" },
  { name: "Interpersonal Skills", thai: "มนุษยสัมพันธ์และการทำงานร่วมกับผู้อื่นในทีม", icon: "Users" },
];

export const interests = [
  { name: "Medical Equipment", thai: "อุปกรณ์และเครื่องมือทางการแพทย์สมัยใหม่" },
  { name: "Application of Materials", thai: "การประยุกต์ใช้วัสดุในงานวิศวกรรม" },
  { name: "Materials Combines", thai: "วัสดุผสมและการผสานเทคโนโลยีวัสดุ" },
  { name: "PCB Designs", thai: "การออกแบบแผ่นวงจรพิมพ์ (Printed Circuit Boards)" },
  { name: "Industrial Processes", thai: "กระบวนการทางอุตสาหกรรมและการผลิต" },
];

export const hobbies = [
  { name: "Badminton", thai: "แบดมินตัน (แข่งขันกีฬา Freedom Badminton)", icon: "Trophy" },
  { name: "Basketball", thai: "บาสเกตบอล (กีฬาและกิจกรรมกลุ่ม)", icon: "Activity" },
  { name: "Table Tennis", thai: "เทเบิลเทนนิส / ปิงปอง", icon: "Target" },
  { name: "Drummer", thai: "มือกลองสำหรับวงดนตรีสันทนาการ", icon: "Music" },
];

export const projects: Project[] = [
  {
    id: "pulse-oximeter",
    year: "1st Year",
    yearNum: 1,
    title: "A Pulse Oximeter Prototype Based on the Principle of Light Reflection Using an Arduino Board",
    thaiTitle: "ต้นแบบเครื่องวัดค่าความอิ่มตัวของออกซิเจนในเลือด (Pulse Oximeter) ด้วยแสงสะท้อนและ Arduino",
    category: "medical",
    categoryLabel: "Medical & Circuits",
    tagline: "การประยุกต์ใช้หลักการสะท้อนของแสงเพื่อตรวจจับระดับ SpO2 และอัตราชีพจร",
    descriptions: [
      "Applied optical sensing principles to develop a prototype using an Arduino microcontroller board.",
      "Participated in circuit assembly, breadboard testing, and system integration.",
      "Studied the principles of light absorption and reflection of oxygenated and deoxygenated hemoglobin for blood oxygen saturation measurement."
    ],
    highlights: [
      "วิเคราะห์การสะท้อนและการดูดกลืนของแสงสีแดง (Red LED) และแสงอินฟราเรด (IR LED)",
      "เขียนโปรแกรมรับและประมวลผลค่าสัญญาณอนาล็อกจากโฟโตเซนเซอร์ผ่าน Arduino",
      "ทดสอบความเสถียรของสัญญาณชีพจรและการตัดสัญญาณรบกวนเบื้องต้น"
    ],
    tags: ["Arduino", "Optical Sensing", "SpO2 Measurement", "Pulse Oximetry", "Circuit Assembly", "Biomedical"],
    featured: true
  },
  {
    id: "temp-alert-system",
    year: "2nd Year",
    yearNum: 2,
    title: "Application of a Thermistor and an Operational Amplifier in Temperature Measurement and Alert System Project",
    thaiTitle: "ระบบตรวจวัดอุณหภูมิและแจ้งเตือนภัยด้วยเทอร์มิสเตอร์และ Op-Amp (Operational Amplifier)",
    category: "circuits",
    categoryLabel: "Circuits & Sensors",
    tagline: "การออกแบบวงจรปรับสภาพสัญญาณและเปรียบเทียบแรงดันเพื่อตรวจวัดอุณหภูมิแบบเรียลไทม์",
    descriptions: [
      "Participated in electronic circuit design, schematic drawing, and overall system planning.",
      "Developed a comprehensive system flowchart to illustrate the complete operating and decision process.",
      "Studied the application of temperature sensors (NTC/PTC thermistors) and operational amplifiers for precision signal conditioning."
    ],
    highlights: [
      "ออกแบบวงจรแบ่งแรงดัน (Voltage Divider) ควบคู่กับ NTC Thermistor เพื่อแปลงอุณหภูมิเป็นแรงดันไฟฟ้า",
      "นำ Op-Amp มาต่อเป็นวงจรเปรียบเทียบแรงดัน (Comparator) ควบคุม Threshold การแจ้งเตือน",
      "สร้าง Flowchart จำลองลอจิกการทำงานและทดสอบระบบเตือนภัยด้วยสัญญาณไฟ/เสียง"
    ],
    tags: ["Thermistor", "Op-Amp", "Signal Conditioning", "Comparator", "Circuit Design", "System Flowchart"],
    featured: true
  },
  {
    id: "preventive-maintenance",
    year: "2nd Year",
    yearNum: 2,
    title: "Preventive Maintenance of Medical Equipment",
    thaiTitle: "กิจกรรมลงพื้นที่บำรุงรักษาเชิงป้องกันเครื่องมือแพทย์ (Preventive Maintenance)",
    category: "medical",
    categoryLabel: "Field Practical",
    tagline: "การฝึกปฏิบัติการตรวจเช็กและบำรุงรักษาเครื่องมือแพทย์นอกสถานที่เพื่อความปลอดภัยสูงสุด",
    descriptions: [
      "Participated in an intensive off-campus medical equipment preventive maintenance (PM) practical activity.",
      "Gained hands-on practical exposure to standard medical equipment inspection and routine maintenance procedures.",
      "Observed the critical importance of regular equipment maintenance in ensuring operational reliability and patient safety."
    ],
    highlights: [
      "เรียนรู้แบบฟอร์มและการตรวจสอบสภาพทางกายภาพ (Physical Inspection) ของอุปกรณ์การแพทย์",
      "ตรวจสอบระบบสายไฟ ความปลอดภัยทางไฟฟ้า (Electrical Safety Testing) และการต่อกราวด์",
      "ทำความเข้าใจผลกระทบของความแม่นยำในการวัดค่าต่อการวินิจฉัยและการรักษาของแพทย์"
    ],
    tags: ["Medical Equipment", "Preventive Maintenance (PM)", "Hospital Safety", "Inspection Protocols", "Practical Fieldwork"],
    featured: true
  },
  {
    id: "tianjin-training",
    year: "3rd Year",
    yearNum: 3,
    title: "International Academic Training at Tianjin Normal University, China",
    thaiTitle: "การฝึกอบรมวิชาการระดับนานาชาติ ณ มหาวิทยาลัยเทียนจิน ประเทศจีน (Vacuum & Thin Film)",
    category: "training",
    categoryLabel: "International Training",
    tagline: "ศึกษาเทคโนโลยีสุญญากาศขั้นสูง การเคลือบฟิล์มบาง และเทคนิค Sputtering เพื่อประยุกต์ใช้ในเครื่องมือแพทย์",
    descriptions: [
      "Participated in an advanced academic training program at Tianjin Normal University, Tianjin, China.",
      "Gained direct exposure to high-level Vacuum Technology and Thin Film Deposition systems.",
      "Studied the fundamental principles, plasma physics, and applications of Sputtering Technology.",
      "Explored the potential applications of advanced thin film technology in smart materials, electronic devices, and bio-medical sensors."
    ],
    highlights: [
      "เรียนรู้โครงสร้างห้องสุญญากาศ ปั๊มสุญญากาศ (Rotary & Diffusion/Turbo Pumps) และเกจวัดแรงดันระดับไมครอน",
      "ศึกษาเทคนิค Magnetron Sputtering ในการปลดปล่อยอะตอมเคลือบบนแผ่น Substrate",
      "เปิดโลกทัศน์การต่อยอดเทคโนโลยีฟิล์มบางสู่เซนเซอร์ตรวจจับชีวภาพและผิวเคลือบวัสดุการแพทย์"
    ],
    tags: ["Vacuum Technology", "Thin Film Deposition", "Sputtering", "Materials Physics", "International Training", "China"],
    featured: true
  },
  {
    id: "christian-uni-training",
    year: "3rd Year",
    yearNum: 3,
    title: "Medical Instrumentation Training at Christian University",
    thaiTitle: "การฝึกอบรมเชิงปฏิบัติการหลักการทำงานเครื่องมือแพทย์ ณ มหาวิทยาลัยคริสเตียน",
    category: "training",
    categoryLabel: "Medical Training",
    tagline: "การอบรมเข้มข้นเกี่ยวกับหลักการทำงาน การสอบเทียบ และฟังก์ชันของเครื่องมือทางการแพทย์",
    descriptions: [
      "Participated in intensive training sessions focused on the operation and fundamental principles of medical instruments.",
      "Gained basic knowledge of medical equipment functionality, measurement methodologies, and safety criteria.",
      "Strengthened understanding of the relationship between physics principles and clinical instrumentation."
    ],
    highlights: [
      "ทำความเข้าใจการทำงานของเครื่องมือวัดสัญญาณทางชีวการแพทย์ (Biomedical Instrumentation)",
      "เรียนรู้กระบวนการทำงาน การตั้งค่า และข้อควรระวังในการทดสอบเครื่องมือแพทย์",
      "เชื่อมโยงความรู้ฟิสิกส์เครื่องมือวัดกับมาตรฐานทางคลินิกจริง"
    ],
    tags: ["Medical Instrumentation", "Biomedical Engineering", "Equipment Calibration", "Safety Standards", "Hands-on Workshop"],
    featured: false
  }
];

export const activities: Activity[] = [
  {
    id: "act-physics-volunteer",
    year: "1st & 2nd Years",
    title: "Physics Volunteer Activities & Community Outreach",
    role: "Active Member & Volunteer",
    description: "เข้าร่วมกิจกรรมค่ายอาสาและโครงการบำเพ็ญประโยชน์ของภาควิชาฟิสิกส์ คณะวิทยาศาสตร์ มจธ. เพื่อถ่ายทอดความรู้และช่วยเหลือชุมชน",
    category: "volunteer",
    badge: "Volunteer"
  },

  {
    id: "act-badminton",
    year: "Sports Experience",
    title: "Freedom Badminton Tournament Competitor",
    role: "Badminton Player",
    description: "เข้าร่วมการแข่งขันแบดมินตันรายการ Freedom Badminton เสริมสร้างวินัย ความมุ่งมั่น และจิตวิญญาณแห่งน้ำใจนักกีฬา",
    category: "sports",
    badge: "Sports & Athlete"
  },
  {
    id: "act-drummer",
    year: "Ongoing",
    title: "Drummer for a Recreational Band",
    role: "Drummer & Musician",
    description: "มือกลองประจำวงดนตรีสันทนาการ ฝึกฝนความแม่นยำด้านจังหวะ สมาธิ และทักษะการทำงานเป็นทีมร่วมกับเพื่อนร่วมวงอย่างกลมกลืน",
    category: "music",
    badge: "Music & Rhythm"
  },
  {
    id: "act-physics-booth",
    year: "KMUTT Science Fair",
    title: "Physics Information & Science Booth Representative",
    role: "Presenter & Demonstrator",
    description: "ทำหน้าที่เป็นตัวแทนประจำบูธประชาสัมพันธ์ อธิบายการทดลองทางฟิสิกส์และให้ข้อมูลแก่นักเรียนและผู้สนใจที่มาร่วมงาน",
    category: "academic",
    badge: "Academic Outreach"
  },
  {
    id: "act-calculus-tutor",
    year: "Academic Support",
    title: "Basic Calculus Tutoring for 1st-Year Students",
    role: "Peer Tutor",
    description: "จัดกลุ่มติวและถ่ายทอดเนื้อหาวิชาแคลคูลัสพื้นฐาน (Basic Calculus) ให้แก่นักศึกษารุ่นน้องปีที่ 1 ช่วยเหลือและทบทวนโจทย์เพื่อความเข้าใจที่ถ่องแท้",
    category: "teaching",
    badge: "Academic Mentoring"
  }
];
