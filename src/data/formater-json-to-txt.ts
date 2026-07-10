import fs from 'fs/promises';
import path from 'path';

const MONTH_MAP_PT: Record<string, string> = {
  '01': 'Jan', '1': 'Jan',
  '02': 'Fev', '2': 'Fev',
  '03': 'Mar', '3': 'Mar',
  '04': 'Abr', '4': 'Abr',
  '05': 'Mai', '5': 'Mai',
  '06': 'Jun', '6': 'Jun',
  '07': 'Jul', '7': 'Jul',
  '08': 'Ago', '8': 'Ago',
  '09': 'Set', '9': 'Set',
  '10': 'Out',
  '11': 'Nov',
  '12': 'Dez'
};

function formatToPtPeriod(dateStr: string): string {
  if (!dateStr) return '';
  
  const [month, year] = dateStr.split('/');
  const monthAbbr = MONTH_MAP_PT[month.trim()];

  return monthAbbr ? `${monthAbbr} ${year}` : dateStr;
}

async function generate() {
  try {
    const jsonPath = path.resolve('./src/data/projects.json'); 
    const jsonRaw = await fs.readFile(jsonPath, 'utf-8');
    const data = JSON.parse(jsonRaw);

    let projects_txt = "";
    let index = 0;

    for (const project of data.projects) {
        index++;

        const formattedStart = formatToPtPeriod(project.date.startAt);
        const formattedEnd = formatToPtPeriod(project.date.endAt);

        const datePeriod = formattedStart === formattedEnd 
        ? formattedStart 
        : `${formattedStart} -- ${formattedEnd}`;

        projects_txt += `
${project.title}
${datePeriod}
${project.description}`;
      

        for (const topic of project.topics) {
            projects_txt += `
- ${topic}`;
      }

        projects_txt += `

Tecnologias: ${project.tags}
`;

        if (project.urls.repository != null) {
            projects_txt += `
Repositório: ${project.urls.repository}
    `
        }
        if (index < data.projects.length) {
            projects_txt += `

// ----------------------------------- 
        `;
      }
    }

    await fs.writeFile('./src/data/projects.txt', projects_txt, 'utf-8');
    console.log('✅ projects.txt generated successfully!');

  } catch (error) {
    console.error('❌ Error generating TXT file:', error);
  }
}

generate();