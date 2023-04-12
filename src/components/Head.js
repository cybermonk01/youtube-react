import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { cachedResult } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const dispatch = useDispatch();

  const searchCache = useSelector((state) => state.search);

  //  searchCache- {"ip": ["iphone 11", "iphone 13"]  }

  // searchCache[searchQuery] = searchCache["ip"] will give ["iphone 11", "iphone 14"]
  //  so if the query is previously generated so it will not make new api calls  and will set  the set the sugegstions to cached values

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }

      getSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(json);
    dispatch(
      cachedResult({
        // iphone: [1,2,3]
        [searchQuery]: json[1],
      })
    );
  };

  const handleToggleMenu = () => {
    console.log("mujhe chuua");

    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between -mt-4 shadow">
      <div className="flex">
        <img
          className="w-12 h-16 pt-8 "
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///9AQEAoKCj09PQ9PT0vLy8sLCw6OjpUVFTd3d3Jycl4eHg1NTUpKSn5+fk4ODgiIiJcXFydnZ1+fn7Pz8/t7e3k5OS5ubmIiIhwcHDg4OBLS0tFRUWSkpKurq5iYmK5pxemAAACUElEQVR4nO3dCXKrMBBFUQkL4UHMGOyM+99l7Pyqv4Pul5B7dnALyg7tRgkBAAAAAAAAAAAAAAAAAABArzt46zzzlrlU/sq8OPVdx7aJCk07Xj0CT6K+f40n+8Brm2SBMabW/iqOuiv41IzWgUsrDYyxtf64mbWX8HERZ+PCIg6MsdgGdpU6MFa2X/2HH1B4oJBCCtUopJBCCn994f7/agtJ+fz7lJJtYLj14sL+Zlx4Ut+mlfmk5q69iP3dOjB0vXQS1TsMhq+N7jm/JJeBaTcPRXEdUxmsZzT/rdNYcu0rl3FavQIBAAAAAMBudOvJ2+q5frmNVfZXjZtT3ynWmpFpqqPDamII50E3Ek7D2T7wZZD1PQ0v5oWv2p/X0qt14DlLA2PM1vfpRb59eTEurMWBMda2gfv/HX//uxgUUkghhRRSSOFfKAw/oNA2MLzJty/fjAvf5duX78aFq3aIEeNgvhh1076fV6wXaB9elU/5jfmY5qE76p7z66PP4Huq6ib5a+pqcul76LZ5PHob58314AgAAAAAALAL63L2tji+QdpNfev8juxT209Og5pzVg2Fi/nK17cP5Vx/+LAPXMTbl/antDbi7Uvro03Cpl7dq62Xve/y7Uvroz/UC7QxZttAti89Ctk2oZBCdSCFFFJI4e8v/APbl+KX8xxez5vUB+sX672oq3z70vxcwUn7kF87rLZ9Ku/T8mkfGMI9qz5tUrY/vfTblnJp/JWcvI4cCGGZ5ou3efL6h1YAAAAAAAAAAAAAAAAAAAAAAAD79gWaO1Pdj84d6wAAAABJRU5ErkJggg=="
          alt="hamburger icon"
          onClick={() => handleToggleMenu()}
        />
        <img
          className="w-36 "
          src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
          alt="youtube icon"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search here"
          value={searchQuery}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-lg border-solid border-2 w-96 border-gray-500 mt-8 p-1  border-r-1 border-l-5 rounded-l-xl rounded-r-none"
        />
        <button className="border-solid border-2 border-gray-500 border-r-1 border-l-0 p-1  rounded-r-xl rounded-l-none">
          Search
        </button>

        {showSuggestions && (
          <div className="fixed p-1 m-1 bg-slate-50 w-[27rem] shadow-lg border rounded-lg">
            <ul>
              {suggestions &&
                suggestions.map((s) => {
                  return <li>🔍 {s}</li>;
                })}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAZlBMVEX///8AAACvr6/w8PD7+/thYWGLi4vOzs7j4+Pa2tqPj49QUFArKyu8vLypqamVlZWAgIA8PDwODg7Hx8eioqJCQkJmZmZycnImJiZra2tGRkadnZ1LS0sVFRXCwsKDg4Pp6elbW1tHYOA/AAAIMklEQVR4nO2da3fyrBKGzaGNtp5t66GPrf7/P/luTKOJgQS4Z2DWXlzfQxiFYU5MJhN2LtViuVofr6fN4bzNsu35sDldj+vVclFd+N/OSVEt1+/ZCO/rZVXEnqk7ZfX9MiZam5fvqow9Z3t2rxsX4Ro2r7vYM7dg+vHPR7iGfx/T2BIMMXs7I9LVnN9mseXQM11tcelqtit5/2Pute3MbPLYErWZrWmlq1lLWao/nxziKU4/sWX7HzmBXjFzjr1SPzilq/mIKN6SXzzFMpJ4izDiKRYRxKvm4eTLsnkVWLzCyZSm4CWoy/EdWjzFdzDxZocY8mXZIdDJ/xtHPMVvAPFmZCa1D1v2P/EtpniKN1bxCmKfwYcNozr9iS1cDZsJHlG7dOHRNSWbV+TOJ0MIbhpbqC7kMQ0h2+8B8UYM4Pe5QuonssRcUNZ08gV3Hex4oZJvNIESi3ca+QQdD898UsgnwDozs/k/l49AQsHrswZcpWL1ywNI0wg9H7oAp4XI872P94lPaZ+9/+a7aXFzAspiust/KRe/p9VGZl9/5Vrbf5p/Ub3By/Im8o/2g5UFuz3NWzy8p5LivQeL7FdOEmV194AJDsBPy4RCRfEuV/nw+ItLvoQgk+MYp8EVjGNqNodf6KRoCvRtL857ooSNCpd4KWpheyUs0YSqg90NxufnnrHnAtyJ1lH9GfaeLz/xFODJb5uZwfJHr/7yTSav0Ku3di/BTggwmofZv1ZnBbZA4cId7LywWaSQ5UQQjYX+w8P4+FB9AbT/GqB9OFqpAB3xgP5sA+nSsSMKsSfmNPJNJsh5OBLAqIChnWylQaBlNGzjI78dYUEZYrUNriNkYLJUiALZKUM/NDCsh089ABRPMA+L1H8Sl+Yi5725vhQYlEyDNiDawDQmYkOQ13Mi+txkTwFDkiTquiCRKP2IyLJnKMhF/kK9QgDuB1jYuO4AVv9ZNx4SSGO53YCsKF2I7QSMxyEfpBNO/dEQP3fPIyCSt+h7vkgukOnm5g6YUj9nCAzGtEJp54TsaCI/tw/i+T7rPSSWzXZDDPnVn+LcULaT7T4q4axWyFBc8mGbcNUZCQlmE5XE6UAqFTphbijYy3gdBQqyt49CKJ3EeAsVCnO3k03QPVzGBg3IUd+2uLGKEcZL/VQTw1I6jFdtsFT6w7GH+mvQhtO6YMU6/+7jQMMwHoNUM4O2smQBG/WH5Y0FC9hk88CiEbkC/hncaNmdWCXTTA1KmWWCj4kmmoleihd70DcJbbRITKqpljUpPXAQsca2Qg0CVxZKdZcUSj+gOkaqw3tDaRm86w2fgPDUVC4Uv/0hM+h0Q8V/8RsaIsOGNWr7wIPIDPz+QSKgyND9fWoXglEEJl8aLvgpkYlMnzVUNM3DeASkmNmCpvmbuBT2nSWWlWiQVoTwYEV0y1NYGcmD9eRIMo6wQqAHx8mVZBxZpVwtrlD1SAtRxXgtTmSdDgSVU7bZ0OgqhZyC2DYHLHPWRkxJc4czeBOrjZCi9C5bEnvoDxnXCp6gFFDExZBnCJeojKs9T2zplIwi/uWsZ850x8SN2NfrehyoWxpFviDZY0Nlqt2JesW1z2lyJR4x5iVlDVcid6lNvGvmGo4cbY1iNQrQsaYJWTwTpdWDlhXTFwdiNOvQsmT75kDwdit6FlShgT6BG+YYqEhC9wZCtjwycaGJH5sI17TKxIRXwCxU2zEjkxD9GfkbxxlRCdAwDQw/1x+L2a33X1lMZ4uPdZi+niqFHeDTO6f9Kv+pZpeiVAKWxWVW/eSrPbWdr0EVIbCdE4rDfvD7kEW13LPqGKXHKSM8HeZvOyt7pty9sR2Dtx+XZeSv3MniLpgUzm1weiPwxasd5g/DRG4DE39jaL70DuKXS+K1WpdTkmqZI/jVmRmpA17bimSJjix7JQhuF4Rhi7+1RBVYWxElmEoqJ7y5BUrzk70S5s9Koin9DUdRUXQkLk0vKPbi3c6HR5ozfNBqhmvU+1jY5Sy2TzyiVvLjchYWTn5nuzhRYK7cI8gOVdayfmcVikW1vFD/HJpvkNcWIBjcbirjfUmZ8Ms5Jrwd8vYlZd9r5kG+ruobue1odr9EdqBvjvupiG4/XB/jaMN4r65L6WNMdls9ePxIpIU/Y3i4ik/Ly/k3CqBe2jirmue24q4HDkk9hQuu5nfveHZ7fKWbAy+OaqL3vNMaiCCfo4T9HeRyFAZfnzUuq1Tj3tjHmQPrlwf2q0zTOM6+9V/Q86GL9WmhjVtaWtwEH4zzx/I00zZvtD0pgtkvOiwjgAYXzurZQPanCTuTy/CwjWMfxH8Ywsa3MNbLjT8aTYE+sFClxmdHozzk1z98GPXxB2JgY48yxyfsGE1oDjw7ssBZ40v2jKj7QTUx+PcztjxwYzCaOLyNBlNpIhaoYnCRjpRXDRhDTPFrHwa04Zghaf5xRGjQBvNWGl1mxoQ2Q37FH6NzN/pRG+Pd4CP/rF0wZNdsbksbfhwxGqbGsJWslpm2DU8kJ96M1r23bE6kC3NHdZJ06Bwny4+76RZplCjTMJoYlLUe7CebxP2Bur/Q+gOL/ciAuB2oeN6FLrGUZx0lTIXWQJPshtiEnYEN3bPQsQCwc1aIMmIedJShc/u6Vk21KCu0Tcside8W0lJSgtyILi2nwkPNT5GHw/D4E7yCmY2iiRiqH6PxXr0qjO9xUs+nQ/D3H3jfG65DkJQzouY2QSBYq5YAW2M/Cr7QLfQuJlaoJ4djfZ8yzbSGAm+XdaWYBx/Cp5dIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKE/AdpB4AsGZzIdwAAAABJRU5ErkJggg=="
          alt="user-icon"
          className="w-8 mt-7 mr-16"
        />
      </div>
    </div>
  );
};

export default Head;
