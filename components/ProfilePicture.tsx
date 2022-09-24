type ProfilePictureProps = {
  letter: string;
};

const ProfilePicture: React.FunctionComponent<ProfilePictureProps> = ({
  letter,
}) => {
  return (
    <div className="h-9 w-9 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center text-white font-medium">
      {letter}
    </div>
  );
};

export default ProfilePicture;
