const Footer = () => {
  return (
    <div className=" container mx-auto flex flex-col gap-2 px-4 text-center text-sm text-[#1D271F] bg-base-100 border-t border-base-300 py-6 md:flex-row md:justify-between md:text-left md:text-[16px]">
      <div>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</div>
      <div className=" md:text-right">
        সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
      </div>
    </div>
  );
};

export default Footer;
