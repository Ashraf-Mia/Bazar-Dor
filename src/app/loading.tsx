export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className=" flex h-screen w-full flex-col items-center justify-center gap-4 bg-base-100">
      <span className="loading loading-spinner text-success"></span>
      <p className=" text-sm font-medium text-base-content/70 animate-pulse">
        লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
      </p>
    </div>
  );
}
