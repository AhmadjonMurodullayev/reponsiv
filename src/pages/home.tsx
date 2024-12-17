import { ThreeD } from "../assets/3d";
import { Art } from "../assets/Art";
import { Copyuter } from "../assets/copyuter";
import { Kasca } from "../assets/Kasca";
import { Left } from "../assets/Left";
import { PS4 } from "../assets/PS4";
import { Telfon } from "../assets/telfon";

export const Home = () => {
  return (
    <>
      <div className="w-[90%] max-w-[1410px] m-auto flex my-10">
        <div className="w-full flex items-center">
          <div className="md:w-[50%]">
            <h1 className="text-primary font-bold text-[18px]">
              Digital Marketing
            </h1>
            <h1 className=" font-bold text-[34px] my-4 lg:text-[50px]">
              Work that we produce for our clients
            </h1>
            <p className="font-semibold text-[18px] lg:text-[28px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <div className="mt-4">
              <button className="bg-primary text-white px-6 py-3 rounded-2xl mt-4">
                Get more details
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://s3-alpha-sig.figma.com/img/0e01/2dc7/c5afd059507e719a12af3cfb1eeaaf6c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bm7VO8EQhFxpsGOiZhehoo~VvLqRUPjpnRL4vA54Mn0XOgEmlvRkITHV2Ofm90yLAG-ZADIipGYowWe9v5mjOCN54HB5NIclBV2XIPkv1axCdeH2dwC8v4dtdSKpazOLz5EAsvk4aRoiUHSLYphrWjCxDTEE0t7N~wRn19rkMUtT2ufYpya99yX4mp1cp99z0K-htJ0CBywYfEQk~Ae25BiSZ1n5wUZ-pYYrt~O1THy4P7ubAc3PhxEiXGxevqniEUVDLIRTgUkVODdPVcaIQ8hKUGsNFugi614TnCPrsOxQNoNXlIooWxFTFmyNi9xupnlJdtASUeBA8Xrq-nRo~w__"
              alt="img"
            />
          </div>
        </div>
      </div>

      <div className="w-[90%] max-w-[1410px] m-auto flex my-16">
        <div className="w-full flex  flex-col">
          <div>
            <h1 className="font-bold text-[20px]  text-center md:text-[35px] lg:text-[50px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h1>
          </div>
          <div className="hidden md:block md:w-[70%] md:my-10">
            <h2 className="font-bold text-[35px]">Lorem Ipsum</h2>
            <p className="font-semibold text-[18px] my-6 lg:text-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className=" my-14">
            <img
              className="md:w-[70%]"
              src="https://s3-alpha-sig.figma.com/img/8e3c/bfcd/457d2a9fe3645e3258d7101447e9f5c0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GgKi4OEaJG46YMW~~LddFA-l-CpjEesx3p9ZYLD8VmKUIBPm7MvlKvpR~Ue47QhRPEUT4JKlcqhe1Ojz8Th3IXSAQlw0hgBcLPgGl~ueDErxho03McxnE7lncmPgvzZj835deYVEIVU7i4teI7A1RbrcRaHSpYyV9DcNiXXoLtvZoSi0fIuc1xJxWtc3ssWDib1AdnncVdsAssOt8FlxGSW-qbe3pwDdvI7X1wKiWRPF440Epxr67okwm92Gt0dUvERsB1VvqrIC7sa-mMHeU1H7AFZfAzDNX4J~xKZ2QT~Q783mKFcUcV~UUwmjT9J57myGiaub8uw5POWS3bnXUg__"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-[90%] max-w-[1410px] m-auto">
        <div className="text-center">
          <h1 className="font-bold text-[20px]  text-center md:text-[35px] lg:text-[50px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
          <p className="font-semibold text-[18px] my-6 lg:text-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="my-10 flex flex-col gap-10 justify-center md:flex-row md:flex-wrap md:gap-20  ">
          <div className="flex flex-col items-center gap-2">
            <Telfon />
            <h2>Mobile Game Development</h2>
            <Left />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Copyuter />
            <h2>Mobile Game Development</h2>
            <Left />
          </div>
          <div className="flex flex-col items-center gap-2">
            <PS4 />
            <h2>Mobile Game Development</h2>
            <Left />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Art />
            <h2>Mobile Game Development</h2>
            <Left />
          </div>
          <div className="flex flex-col items-center gap-2">
            <ThreeD />
            <h2>Mobile Game Development</h2>
            <Left />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Kasca />
            <h2>Mobile Game Development</h2>
            <Left />
          </div>
        </div>
      </div>
    </>
  );
};
