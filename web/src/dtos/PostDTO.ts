export type PostDTO = {
    id:           number;
    title:        string;
    intro:        string;
    description:  string;
    callToAction: string;
    images:       Image[];
    link:         string;
}

type Image = {
    image: string;
    alt:   string;
}