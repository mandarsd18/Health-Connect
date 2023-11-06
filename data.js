const data = [
    {
      id: 1,
      hospital_name: "TeethCare Hospital",
      type: "Dental",
      city: "Jalgaon",
      state: "Maharastra",
      hospital_bed_count: 123,
      desc: "Greenfield Medical Center, nestled in the serene surroundings of Greenfield County at 123 Main Street, is a beacon of healthcare excellence. Our hospital features state-of-the-art facilities, including a 24/7 emergency department, comprehensive diagnostic services, and a team of highly skilled medical professionals spanning various specialties. From general medicine to specialized care, we offer a wide range of services to meet the diverse healthcare needs of our community. Our patient-focused approach ensures that every individual receives personalized care, and our modern amenities, including private rooms and welcoming waiting areas, enhance the overall patient experience. We are not just a medical facility; we are a place of healing, where the dedicated staff goes above and beyond to provide comfort, compassion, and hope to our patients and their families.",
      hosp_image:
        "https://thumbs.dreamstime.com/b/hospital-building-typical-modern-large-urban-43153826.jpg",
      doctor: 
        {
          doc_name: "Angela Patil",
          degree: "phd",
          spec: "General Dentist.",
          doc_desc:
            " Dr. Emily Anderson, a renowned physician at Greenfield Medical Center, located at 123 Main Street in Greenfield County, is a true beacon of expertise and compassionate healthcare. With a wealth of experience and board certification in internal medicine, Dr. Anderson provides patients with top-tier medical care. Her patient-centered approach is marked by active listening, understanding, and the development of tailored treatment plans to address individual needs. She firmly believes in a holistic approach to health, emphasizing preventive care and lifestyle management. Dr. Anderson utilizes cutting-edge technology and collaborates with other healthcare professionals to ensure comprehensive and coordinated care. Her commitment to patient well-being extends beyond the clinic, fostering trust, open communication, and patient empowerment. Dr. Emily Anderson is not just a physician; she is a compassionate healer dedicated to the health and wellness of her patients, making her an invaluable asset to Greenfield Medical Center.",
          doc_img:
            "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
          fees: 12000,
        },
      
    },
    {
      id: 2,
      hospital_name: "Sleepwell Hospital",
      type: "Clinics for Sleep Disorders",
      city: "Pune",
      state: "Maharastra",
      hospital_bed_count: 200,
      desc: "Greenfield Medical Center, nestled in the serene surroundings of Greenfield County at 123 Main Street, is a beacon of healthcare excellence. Our hospital features state-of-the-art facilities, including a 24/7 emergency department, comprehensive diagnostic services, and a team of highly skilled medical professionals spanning various specialties. From general medicine to specialized care, we offer a wide range of services to meet the diverse healthcare needs of our community. Our patient-focused approach ensures that every individual receives personalized care, and our modern amenities, including private rooms and welcoming waiting areas, enhance the overall patient experience. We are not just a medical facility; we are a place of healing, where the dedicated staff goes above and beyond to provide comfort, compassion, and hope to our patients and their families.",
      hosp_image:
        "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
      doctor: 
        {
          doc_name: "Jonh Doe",
          degree: "Md",
          spec: "Neurology",
          doc_desc:
            "Dr. Emily Anderson, a renowned physician at Greenfield Medical Center, located at 123 Main Street in Greenfield County, is a true beacon of expertise and compassionate healthcare. With a wealth of experience and board certification in internal medicine, Dr. Anderson provides patients with top-tier medical care. Her patient-centered approach is marked by active listening, understanding, and the development of tailored treatment plans to address individual needs. She firmly believes in a holistic approach to health, emphasizing preventive care and lifestyle management. Dr. Anderson utilizes cutting-edge technology and collaborates with other healthcare professionals to ensure comprehensive and coordinated care. Her commitment to patient well-being extends beyond the clinic, fostering trust, open communication, and patient empowerment. Dr. Emily Anderson is not just a physician; she is a compassionate healer dedicated to the health and wellness of her patients, making her an invaluable asset to Greenfield Medical Center.",
          doc_img:
            "https://media.istockphoto.com/id/1470505351/photo/portrait-of-a-smiling-doctor-holding-glasses-and-a-mobile-phone-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=8CebFLF4PFnt9JYJznGhYoOQxcyHLVpTGVfkvEsZd2Q=",
          fees: 40000,
        },
      
    },
    {
      id: 3,
      hospital_name: "Normal Hospital",
      type: "Psychiatric Hospitals",
      city: "Nanded",
      state: "Maharastra",
      hospital_bed_count: 780,
      desc: "Greenfield Medical Center, nestled in the serene surroundings of Greenfield County at 123 Main Street, is a beacon of healthcare excellence. Our hospital features state-of-the-art facilities, including a 24/7 emergency department, comprehensive diagnostic services, and a team of highly skilled medical professionals spanning various specialties. From general medicine to specialized care, we offer a wide range of services to meet the diverse healthcare needs of our community. Our patient-focused approach ensures that every individual receives personalized care, and our modern amenities, including private rooms and welcoming waiting areas, enhance the overall patient experience. We are not just a medical facility; we are a place of healing, where the dedicated staff goes above and beyond to provide comfort, compassion, and hope to our patients and their families.",
      hosp_image:
        "https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=1-EC4Mxf--5u4ItDIzrIOrduXlbKRnbx9xWWtiifrDo=",
      doctor: 
        {
          doc_name: "Nandlal Arora",
          degree: "Ms",
          spec: "Pediatrics",
          doc_desc:
            "Dr. Emily Anderson, a renowned physician at Greenfield Medical Center, located at 123 Main Street in Greenfield County, is a true beacon of expertise and compassionate healthcare. With a wealth of experience and board certification in internal medicine, Dr. Anderson provides patients with top-tier medical care. Her patient-centered approach is marked by active listening, understanding, and the development of tailored treatment plans to address individual needs. She firmly believes in a holistic approach to health, emphasizing preventive care and lifestyle management. Dr. Anderson utilizes cutting-edge technology and collaborates with other healthcare professionals to ensure comprehensive and coordinated care. Her commitment to patient well-being extends beyond the clinic, fostering trust, open communication, and patient empowerment. Dr. Emily Anderson is not just a physician; she is a compassionate healer dedicated to the health and wellness of her patients, making her an invaluable asset to Greenfield Medical Center.",
          doc_img:
            "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
          fees: 4000,
        },
      
    },
    
    {
      id: 4,
      hospital_name: "Something Hospital",
      type: "Hospices & Palliative Care Centers",
      city: "Pusad",
      state: "Maharastra",
      hospital_bed_count: 650,
      desc: "Greenfield Medical Center, nestled in the serene surroundings of Greenfield County at 123 Main Street, is a beacon of healthcare excellence. Our hospital features state-of-the-art facilities, including a 24/7 emergency department, comprehensive diagnostic services, and a team of highly skilled medical professionals spanning various specialties. From general medicine to specialized care, we offer a wide range of services to meet the diverse healthcare needs of our community. Our patient-focused approach ensures that every individual receives personalized care, and our modern amenities, including private rooms and welcoming waiting areas, enhance the overall patient experience. We are not just a medical facility; we are a place of healing, where the dedicated staff goes above and beyond to provide comfort, compassion, and hope to our patients and their families.",
      hosp_image:
        "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      doctor: 
        {
          doc_name: "Jack Martin",
          degree: "M.B.B.S",
          spec: "Pediatrics",
          doc_desc:
            "Dr. Emily Anderson, a renowned physician at Greenfield Medical Center, located at 123 Main Street in Greenfield County, is a true beacon of expertise and compassionate healthcare. With a wealth of experience and board certification in internal medicine, Dr. Anderson provides patients with top-tier medical care. Her patient-centered approach is marked by active listening, understanding, and the development of tailored treatment plans to address individual needs. She firmly believes in a holistic approach to health, emphasizing preventive care and lifestyle management. Dr. Anderson utilizes cutting-edge technology and collaborates with other healthcare professionals to ensure comprehensive and coordinated care. Her commitment to patient well-being extends beyond the clinic, fostering trust, open communication, and patient empowerment. Dr. Emily Anderson is not just a physician; she is a compassionate healer dedicated to the health and wellness of her patients, making her an invaluable asset to Greenfield Medical Center.",
          doc_img: "https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=",
          fees: 150,
        },
      },

      
  ];

  module.exports=data;