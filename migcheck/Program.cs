using System;
using System.Runtime.InteropServices;
using Microsoft.Web.Administration;

// Run this to build and place an .exe: "dotnet publish -r win10-x64 --output bin/dist/win"

namespace migcheck
{
    class Program
    {
        static void Main(string[] args)
        {
            ServerManager mgr = new ServerManager();
            SiteCollection sites = mgr.Sites;

            if (!VerifyIISVersion())
            {
                Console.WriteLine("This utility requires at least IIS version 7.");
                return;
            }


            foreach (Site site in sites)
            {
                Console.WriteLine($"Found site \"{site.Name}\".");
            }

            Console.WriteLine("Hello World!");
        }

        static bool VerifyIISVersion()
        {
            string[] versionInfo = RuntimeInformation.OSDescription.Split(' ');

            //
            // Must be Microsoft Windows
            //

            if (versionInfo[0] == "Microsoft" && versionInfo[1] == "Windows")
            {
                Console.WriteLine("Yup, it's Windows");
            }
            else
            {
                return false;
            }

            //
            // The major and minor version must be 6.0 or greater
            //

            string[] versionNumerical = versionInfo[2].Split('.');

            Int32 versionMajor = Convert.ToInt32(versionNumerical[0]);
            //Int32 versionMinor = Convert.ToInt32(versionNumerical[1]);
            //Int32 versionBuild = Convert.ToInt32(versionNumerical[2]);

            if (versionMajor < 6)
            {
                return false;
            }

            return true;
        }
    }
}
