import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [username, setUsername] = useState("Nkaka");

  if (!username) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl">About Page</h1>
        <div className="mt-10 space-y-3 text-xl">
          <button
            className="p-4 px-10 rounded-full text-white bg-red-500 "
            onClick={() => setUsername(null)}
          >
            Logout
          </button>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            alias aut, dolor corporis deleniti optio voluptate asperiores veniam
            accusamus fuga! Aperiam, ut quo voluptas voluptate aliquid natus
            neque facere perspiciatis fuga modi harum commodi dolorum deleniti
            ea quis possimus eius? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Non reiciendis, deleniti, aperiam exercitationem
            voluptates suscipit maiores perferendis possimus quibusdam natus
            sapiente itaque asperiores, nisi ad laboriosam hic nam recusandae.
            Officia magni facilis, accusamus perspiciatis dolor vitae. Officia,
            dolore incidunt. Enim, optio? Nobis iure alias vel? Provident ad
            voluptatum voluptas deleniti?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            alias aut, dolor corporis deleniti optio voluptate asperiores veniam
            accusamus fuga! Aperiam, ut quo voluptas voluptate aliquid natus
            neque facere perspiciatis fuga modi harum commodi dolorum deleniti
            ea quis possimus eius? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Porro, exercitationem sapiente adipisci ducimus
            vero nam similique et totam ad dolores corporis quas minima dolorum
            libero nesciunt non iure odit quos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            alias aut, dolor corporis deleniti optio voluptate asperiores veniam
            accusamus fuga! Aperiam, ut quo voluptas voluptate aliquid natus
            neque facere perspiciatis fuga modi harum commodi dolorum deleniti
            ea quis possimus eius? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sapiente, fuga itaque doloremque quisquam,
            laboriosam quod sint repellat, odio rem omnis sed vero. Voluptatum
            adipisci sunt iure suscipit. Voluptas nulla eius accusamus dicta
            optio nobis enim iusto, sapiente molestias ipsam, aliquid reiciendis
            eligendi corrupti perferendis mollitia molestiae ea quas
            perspiciatis cupiditate!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            alias aut, dolor corporis deleniti optio voluptate asperiores veniam
            accusamus fuga! Aperiam, ut quo voluptas voluptate aliquid natus
            neque facere perspiciatis fuga modi harum commodi dolorum deleniti
            ea quis possimus eius?
          </p>
        </div>
      </div>
    </section>
  );
}
