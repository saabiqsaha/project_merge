import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const TeamSection = () => {
  const teamMember = {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Former VP at TechGiant with 15+ years of industry experience. Specialized in product development and strategic growth. MBA from Harvard Business School with a focus on technology innovation and entrepreneurship. Led multiple successful product launches generating over $50M in revenue.",
    image: "/placeholder-person.jpg", // Replace with actual image path
  };

  return (
    <section id="team" className="py-12 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-3 text-blue-800 dark:text-blue-400">
            Meet the Founder
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm">
            With a proven track record of innovation and business leadership
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="overflow-hidden border-blue-100 hover:border-blue-300 transition-all duration-300 dark:border-blue-900/50">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center p-4">
                <div className="w-24 h-24 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center text-blue-700 dark:text-blue-300 text-2xl font-bold">
                  {teamMember.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <CardHeader className="pb-2">
                  <h3 className="font-bold text-lg text-blue-700 dark:text-blue-400">
                    {teamMember.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500">{teamMember.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {teamMember.bio}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-blue-900/50 text-gray-600 dark:text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-blue-900/50 text-gray-600 dark:text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-blue-900/50 text-gray-600 dark:text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                      </svg>
                    </button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 