const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start gap-7 my-5">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/full-stack-web-developer-junaid/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/linkedIn.png" alt="linkedIn-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/MJunaid648"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/github.png" alt="github-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/muhammadjunaid853/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/instagram.png" alt="instagram-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://web.facebook.com/profile.php?id=100005225890133"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/facebook.png" alt="facebook-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
