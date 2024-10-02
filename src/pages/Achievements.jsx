import { FaEye } from "react-icons/fa"; // Import the view icon
import { useContext, useState } from "react";
import { ColorContext } from "../context/ColorContext";

const Achievements = () => {
  const [hovered, setHovered] = useState(null);
  const { color } = useContext(ColorContext);

  const certificates = [
    { id: 1, title: "Microsoft Certified: Azure AI Fundamentals", image: "https://images.credly.com/size/340x340/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png", link: "https://www.credly.com/earner/earned/badge/64013a79-26be-4986-9099-f48c07d48c5e" },
    { id: 2, title: "Microsoft Certified: Azure Fundamentals", image: "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png", link: "https://www.credly.com/earner/earned/badge/676ef2c0-45fa-4329-b831-34c3fa2318e4" },
    { id: 3, title: "Red Hat Certified Enterprise Application Developer", image: "https://images.credly.com/size/340x340/images/ae7dd2bd-1d04-43d9-b148-1ef79ec45129/image.png", link: "https://www.credly.com/earner/earned/badge/1671fec2-7968-4d95-8bda-0ba1a3412b2e" },
    { id: 4, title: "AWS Certified Cloud Practitioner", image: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png", link: "https://www.credly.com/earner/earned/badge/66632ddd-7727-4094-abe8-7b882701028f" },
    { id: 5, title: "AWS Certified Developer – Associate", image: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png", link: "https://www.credly.com/earner/earned/badge/4d9ff7a3-753c-4c56-a9bc-14252674b3bb" },
    { id: 6, title: "AWS Academy Graduate - AWS Academy Cloud Foundations", image: "https://images.credly.com/size/340x340/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png", link: "https://www.credly.com/earner/earned/badge/add28ae5-ed59-412e-9d2d-7764a89f5883" },
    { id: 7, title: "CCNA: Switching, Routing, and Wireless Essentials", image: "https://images.credly.com/size/340x340/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png", link: "https://www.credly.com/earner/earned/badge/0fc5e236-8904-4034-a813-5e31d12960f3" },
    { id: 8, title: "CCNA: Introduction to Networks", image: "https://images.credly.com/size/340x340/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png", link: "https://www.credly.com/earner/earned/badge/d8605b9f-cb62-4603-82e9-597325f2e78d" },
    { id: 9, title: "Open Source Software Development, Linux and Git Specialization", image: "https://images.credly.com/size/340x340/images/a8e890b4-d484-4e04-b521-fba516a8c3cd/coursera-specialization-badge.png", link: "https://www.credly.com/earner/earned/badge/c7c8c770-a758-484c-9531-bdc7cd06b89c" },
    { id: 10, title: "SAS Statistical Business Analyst Professional Certificate", image: "https://images.credly.com/size/340x340/images/98cacf67-57fe-425d-8782-5a8cffd9ee0a/image.png", link: "https://www.credly.com/earner/earned/badge/e9457f43-217c-4365-8023-1064b8efb95d" },
    { id: 11, title: "Automation Anywhere Certified Essentials RPA Professional", image: "https://media.licdn.com/dms/image/v2/D5622AQFQCs9IdqYq7w/feedshare-shrink_800/feedshare-shrink_800/0/1721405484937?e=1730937600&v=beta&t=5j1E2-xpYpjdxQaHeC0W4LrRE0ujYUnNBL_ZM6cHMgE", link: "https://www.linkedin.com/feed/update/urn:li:activity:7220097916957339650/" },
    { id: 12, title: "Juniper Network Virtual Internship Certified! 🎓", image: "https://media.licdn.com/dms/image/v2/D5622AQG2idWWetJYdQ/feedshare-shrink_800/feedshare-shrink_800/0/1691852843117?e=1730937600&v=beta&t=ONWoVH0nXYLeq2xJljsMS1ZPyjzu3RfW0gu6zzDgPXQ", link: "https://www.linkedin.com/posts/manohar757_proud-to-share-my-achievement-eduskills-activity-7096145153391804416-H0RA" },
  ];

  return (
     <div className="h-full w-full ml-80 mt-28 mr-5 justify-center text-white">
      <div className="flex">
        {/* Achievements Section */}
        <div className="w-full p-8">
          <h1 className="text-2xl font-bold mb-8">
            <span style={{ color: `${color}` }}>My </span>Achievements
          </h1>

          <div className="grid grid-cols-3 gap-6" style={{ width: "1150px" }}>
            {certificates.map((certificate) => (
              <a
                key={certificate.id}
                href={certificate.link} // Link to the certificate
                target="_blank"
                rel="noopener noreferrer"
                className="relative shadow-md rounded-lg overflow-hidden cursor-pointer bg-white bg-opacity-10 border border-dotted border-white"
                onMouseEnter={() => setHovered(certificate.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Certificate Image */}
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className={`w-full h-96 object-cover ${
                    hovered === certificate.id ? "rotate-left" : ""
                  }`} // Add "rotate-left" class on hover
                />

                {/* View Icon */}
                {hovered === certificate.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <FaEye className="text-white text-4xl" />
                  </div>
                )}

                {/* Certificate Title */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                    {certificate.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
