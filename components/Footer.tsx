export default function Footer() {
  return (
    <footer className="py-12  mt-8">
      <p className="text-xs text-center dark:text-gray-300">
        © {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}
