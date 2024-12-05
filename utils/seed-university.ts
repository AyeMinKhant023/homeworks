import prisma from "@/utils/db";
// const prisma = require("./utils/db")
import hashPassword from "./hashPassword";
// const hashPassword = require("./hashPassword")

export default async function seed() {
    const password = await hashPassword("password");

    const user = await prisma.user.create({
        data: {
            email: "zwe@prisma.io",
            name: "Zwe",
            password,
        },
    });

    const university = await prisma.user.create({
        data: {
            email: "admin@prisma.io",
            name: "Admin",
            password,
            universities: {
                create: [
                    {
                        name: "Harvard University",
                        state: "Massachusetts",
                        city: "Cambridge",
                        rank: 1,
                        description:
                            "One of the world's most prestigious universities, known for its academic excellence.",
                        website: "https://www.harvard.edu/",
                        studentCount: 23000,
                        acceptance: 4.6,
                        type: "Private",
                        imageUrl: "https://placehold.co/600x400?text=Harvard",
                    },
                    {
                        name: "Stanford University",
                        state: "California",
                        city: "Stanford",
                        rank: 2,
                        description:
                            "A leading research university known for its entrepreneurial spirit.",
                        website: "https://www.stanford.edu/",
                        studentCount: 16000,
                        acceptance: 4.3,
                        type: "Private",
                        imageUrl: "https://placehold.co/600x400?text=Stanford",
                    },
                    {
                        name: "Massachusetts Institute of Technology (MIT)",
                        state: "Massachusetts",
                        city: "Cambridge",
                        rank: 3,
                        description:
                            "Renowned for its cutting-edge research and innovation in science and technology.",
                        website: "https://www.mit.edu/",
                        studentCount: 11500,
                        acceptance: 6.7,
                        type: "Private",
                        imageUrl:
                            "https://placehold.co/600x400?text=Massachusetts",
                    },
                    {
                        name: "California Institute of Technology (Caltech)",
                        state: "California",
                        city: "Pasadena",
                        rank: 4,
                        description:
                            "A small but prestigious science and engineering institution.",
                        website: "https://www.caltech.edu/",
                        studentCount: 2200,
                        acceptance: 6.4,
                        type: "Private",
                        imageUrl:
                            "https://placehold.co/600x400?text=California",
                    },
                    {
                        name: "University of Chicago",
                        state: "Illinois",
                        city: "Chicago",
                        rank: 5,
                        description:
                            "Known for its rigorous scholarship and influential faculty.",
                        website: "https://www.uchicago.edu/",
                        studentCount: 16000,
                        acceptance: 6.2,
                        type: "Private",
                        imageUrl:
                            "https://placehold.co/600x400?text=University",
                    },
                    {
                        name: "Columbia University",
                        state: "New York",
                        city: "New York City",
                        rank: 6,
                        description:
                            "An Ivy League university recognized for its diverse academic programs.",
                        website: "https://www.columbia.edu/",
                        studentCount: 30000,
                        acceptance: 3.9,
                        type: "Private",
                        imageUrl: "https://placehold.co/600x400?text=Columbia",
                    },
                    {
                        name: "Yale University",
                        state: "Connecticut",
                        city: "New Haven",
                        rank: 7,
                        description:
                            "Well-known for its drama and music programs, as well as its law school.",
                        website: "https://www.yale.edu/",
                        studentCount: 15000,
                        acceptance: 4.5,
                        type: "Private",
                        imageUrl: "https://placehold.co/600x400?text=Yale",
                    },
                    {
                        name: "Princeton University",
                        state: "New Jersey",
                        city: "Princeton",
                        rank: 8,
                        description:
                            "A historic Ivy League university with a strong emphasis on undergraduate education.",
                        website: "https://www.princeton.edu/",
                        studentCount: 8000,
                        acceptance: 4.0,
                        type: "Private",
                        imageUrl: "https://placehold.co/600x400?text=Princeton",
                    },
                    {
                        name: "University of Pennsylvania",
                        state: "Pennsylvania",
                        city: "Philadelphia",
                        rank: 9,
                        description:
                            "An Ivy League university known for its business and medical programs.",
                        website: "https://www.upenn.edu/",
                        studentCount: 24000,
                        acceptance: 5.9,
                        type: "Private",
                        imageUrl:
                            "https://placehold.co/600x400?text=University",
                    },
                    {
                        name: "Johns Hopkins University",
                        state: "Maryland",
                        city: "Baltimore",
                        rank: 10,
                        description:
                            "Famed for its research in medicine and public health.",
                        website: "https://www.jhu.edu/",
                        studentCount: 15000,
                        acceptance: 9.2,
                        type: "Private",
                        imageUrl: "https://placehold.co/600x400?text=Johns",
                    },
                    {
                        name: "Duke University",
                        state: "North Carolina",
                        city: "Durham",
                        rank: 11,
                        description:
                            "Known for its strong research programs and athletic prowess.",
                        website: "https://www.duke.edu/",
                        studentCount: 16000,
                        acceptance: 7.7,
                        type: "Private",
                        imageUrl: "https://placehold.co/600x400?text=Duke",
                    },
                    {
                        name: "University of California, Berkeley",
                        state: "California",
                        city: "Berkeley",
                        rank: 12,
                        description:
                            "A leading public research university with a strong emphasis on social activism.",
                        website: "https://www.berkeley.edu/",
                        studentCount: 42000,
                        acceptance: 14.8,
                        type: "Public",
                        imageUrl:
                            "https://placehold.co/600x400?text=University",
                    },
                    {
                        name: "University of Michigan",
                        state: "Michigan",
                        city: "Ann Arbor",
                        rank: 13,
                        description:
                            "A top-ranked public university known for its research and diverse programs.",
                        website: "https://www.umich.edu/",
                        studentCount: 46000,
                        acceptance: 18.5,
                        type: "Public",
                        imageUrl:
                            "https://placehold.co/600x400?text=University",
                    },
                    {
                        name: "Northwestern University",
                        state: "Illinois",
                        city: "Evanston",
                        rank: 14,
                        description:
                            "A private research university known for its journalism and business programs.",
                        website: "https://www.northwestern.edu/",
                        studentCount: 19000,
                        acceptance: 7.3,
                        type: "Private",
                        imageUrl:
                            "https://placehold.co/600x400?text=Northwestern",
                    },
                    {
                        name: "University of California, Los Angeles (UCLA)",
                        state: "California",
                        city: "Los Angeles",
                        rank: 15,
                        description:
                            "A leading public university known for its programs in the arts and sciences.",
                        website: "https://www.ucla.edu/",
                        studentCount: 46000,
                        acceptance: 9.8,
                        type: "Public",
                        imageUrl:
                            "https://placehold.co/600x400?text=University",
                    },
                    {
                        name: "University of Virginia",
                        state: "Virginia",
                        city: "Charlottesville",
                        rank: 16,
                        description:
                            "Founded by Thomas Jefferson, known for its historic campus and strong programs.",
                        website: "https://www.virginia.edu/",
                        studentCount: 24000,
                        acceptance: 19.6,
                        type: "Public",
                        imageUrl:
                            "https://placehold.co/600x400?text=University",
                    },
                    {
                        name: "University of Southern California (USC)",
                        state: "California",
                        city: "Los Angeles",
                        rank: 17,
                        description:
                            "Known for its strong programs in film and the arts.",
                        website: "https://www.usc.edu/",
                        studentCount: 42000,
                        acceptance: 10.2,
                        type: "Private",
                        imageUrl:
                            "https://placehold.co/600x400?text=University",
                    },
                    {
                        name: "University of Washington",
                        state: "Washington",
                        city: "Seattle",
                        rank: 18,
                        description:
                            "A leading public research university known for its health sciences.",
                        website: "https://www.washington.edu/",
                        studentCount: 47000,
                        acceptance: 46.5,
                        type: "Public",
                        imageUrl:
                            "https://placehold.co/600x400?text=University",
                    },
                    {
                        name: "University of Texas at Austin",
                        state: "Texas",
                        city: "Austin",
                        rank: 19,
                        description:
                            "A top public research university known for its engineering programs.",
                        website: "https://www.utexas.edu/",
                        studentCount: 49000,
                        acceptance: 29.7,
                        type: "Public",
                        imageUrl:
                            "https://placehold.co/600x400?text=University",
                    },
                    {
                        name: "Georgia Institute of Technology",
                        state: "Georgia",
                        city: "Atlanta",
                        rank: 20,
                        description:
                            "Known for its engineering and technology programs.",
                        website: "https://www.gatech.edu/",
                        studentCount: 41000,
                        acceptance: 20.5,
                        type: "Public",
                        imageUrl: "https://placehold.co/600x400?text=Georgia",
                    },
                ],
            },
        },
    });
    console.log(user);
    console.log(university);
}

export async function seedPost() {
    const newPost = await prisma.university.create({
        data: {
            name: "Stanford University",
            state: "California",
            city: "Stanford",
            rank: 2,
            description:
                "A leading research university known for its entrepreneurial spirit.",
            website: "https://www.stanford.edu/",
            studentCount: 16000,
            acceptance: 4.3,
            type: "Private",
            imageUrl: "https://placehold.co/600x400?text=Stanford",
            userId: 1, // Assuming a user with ID 1 exists
        },
    });

    console.log(newPost);
}
