"use client";

import { title } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function mypage() {
  return (
    <div>
      <h1 className={title()}>my page</h1>
      <p>
        Hallo Everybody !!
      </p>
      <p>
        These are p elements !!
      </p>
      <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200" alt="cat" width={200}/>
      <span>that is a cat and this is a span element</span>
      <span> (this is a span element too)</span>
      <p></p>
      <ConfettiButton></ConfettiButton> <span>celebrate button !!!</span>
    </div>
  );
}
