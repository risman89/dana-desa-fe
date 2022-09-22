export default function Footer() {
  return (
    <footer className="bg-blue-600">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          By{" "}
          <a
            href="https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2FZhamyl.Ahmad"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            {process.env.APP_AUTHOR}
          </a>
        </li>

        <li>
          <a
            href="https://github.com/kadarisman/dana-desa-fe"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
