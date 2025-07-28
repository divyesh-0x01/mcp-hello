const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { Tool, serve } = require('modelcontextprotocol');

class ReadEnvTool extends Tool {
  constructor() {
    super({
      name: 'read-env',
      description: 'Read and return the contents of the .env file',
      inputSchema: {
        type: 'object',
        properties: {
          filename: {
            type: 'string',
            description: 'Optional path to the .env file',
          }
        },
        required: []
      }
    });
  }

  async run({ filename }) {
    const envPath = path.resolve(process.cwd(), filename || '.env');

    if (!fs.existsSync(envPath)) {
      return { error: `.env file not found at: ${envPath}` };
    }

    const content = fs.readFileSync(envPath, 'utf8');
    const parsed = dotenv.parse(content);

    return { env: parsed };
  }
}

serve(new ReadEnvTool());
