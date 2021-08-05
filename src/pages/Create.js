import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";

import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://hiiwioouscmwdgfhobom.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODA0MTA5NiwiZXhwIjoxOTQzNjE3MDk2fQ.uMF3eAqCD2zgJnJJL6h2rKYSH-d2H6rsGrXGF74X-70");

function Create(props) {
  const [tagList, updatedPhrases] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {
    register2,
    handleSubmit2,
    watch2,
    formState: { errors2 },
  } = useForm();

  const onTagEntry = (data) => {
    if (!tagList.includes(data.tag)) {
      updatedPhrases([...tagList, data.tag]);
    }
  };
  const onPickupSubmit = (data) => {
    console.log("yo");
    addToDatabase(data);
  };
  async function addToDatabase(data5) {
    // const { data, error } = await supabase.from("users").insert([{ email: "user.email", userId: "user.id" }]);

    const { data, error } = await supabase.from("pickuplines").insert([{ userId: supabase.auth.user().id, data: data5.value, tags: tagList }]);
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onTagEntry)}>
          {/* register your input into the hook by invoking the "register" function */}
          <h1>Describe the person this is for, or the type of line (e.g. pun, bad)</h1>
          <input defaultValue="test" {...register("tag")} placeholder="hi" />
          <input type="submit" />
        </form>

        {tagList.map((phrase) => (
          <h1>{phrase}</h1>
        ))}
      </div>
      <div>
        <form onSubmit={handleSubmit(onPickupSubmit)}>
          <h1>Enter Pickup Line</h1>
          <input {...register("value", { required: true })} placeholder="hi"></input>
          {errors.value && <span>Please enter a Pickup Line</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Create;
