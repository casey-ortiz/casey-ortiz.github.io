'use client'
import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebook, FaSoundcloud, FaLinkedin } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <div className="flex justify-evenly py-10" style={{ width: "20vw" }}>
      <Link href="https://www.instagram.com/_ca.sey0205/" target="_blank">
        <FaInstagram size={30} style={{ color: "#71bae7" }} />
      </Link>
      <Link href="https://soundcloud.com/lotus-flower-206577421" target="_blank">
        <FaSoundcloud size={30} style={{ color: "#71bae7" }} />
      </Link>
      <Link href="https://www.youtube.com/@CassandraMariana" target="_blank">
        <FaYoutube size={30} style={{ color: "#71bae7" }} />
      </Link>
      <Link href="https://www.facebook.com/julia.leyley" target="_blank">
        <FaFacebook size={30} style={{ color: "#71bae7" }} />
      </Link>
      <Link href="https://www.linkedin.com/in/casey-ortiz-0891101b7/" target="_blank">
        <FaLinkedin size={30} style={{ color: "#71bae7" }} />
      </Link>
    </div>
  );
}
