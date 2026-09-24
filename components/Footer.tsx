export default function Footer() {
  return (
    <footer className="bg-aadaabGreen text-white mt-16">
      <div className="container-custom py-8 text-center">
        <p className="text-lg font-heading mb-3">Aadaab Foundation</p>
        <div className="flex justify-center gap-5 mb-4 text-sm flex-wrap">
          <a href="https://instagram.com/aadaabfoundation" target="_blank" className="hover:text-aadaabOrange">Instagram</a>
          <a href="https://youtube.com/@aadaabfoundation" target="_blank" className="hover:text-aadaabOrange">YouTube</a>
          <a href="https://facebook.com/aadaabfoundation" target="_blank" className="hover:text-aadaabOrange">Facebook</a>
          <a href="mailto:aadaabfoundation@gmail.com" className="hover:text-aadaabOrange">Email</a>
        </div>
        <p className="text-xs opacity-80">
          © {new Date().getFullYear()} Aadaab Foundation. All Rights Reserved. | Made with Passion 🧡
        </p>
      </div>
    </footer>
  );
}
